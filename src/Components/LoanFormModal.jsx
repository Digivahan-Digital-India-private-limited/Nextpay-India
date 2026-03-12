import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  MapPin, User, Phone, Mail, IndianRupee, MessageSquare,
  Briefcase, Building2, ChevronDown, Search, X, CheckCircle2, Loader2,
} from "lucide-react";

const API_BASE = import.meta.env.DEV ? "" : (import.meta.env.VITE_API_URL ?? "");

const CITIES = [
  { value: "DELHI", label: "Delhi" },
  { value: "MUMBAI", label: "Mumbai" },
  { value: "BANGALORE", label: "Bangalore" },
  { value: "HYDERABAD", label: "Hyderabad" },
  { value: "CHENNAI", label: "Chennai" },
  { value: "KOLKATA", label: "Kolkata" },
  { value: "PUNE", label: "Pune" },
  { value: "AHMEDABAD", label: "Ahmedabad" },
  { value: "JAIPUR", label: "Jaipur" },
  { value: "LUCKNOW", label: "Lucknow" },
  { value: "KANPUR", label: "Kanpur" },
  { value: "NAGPUR", label: "Nagpur" },
  { value: "INDORE", label: "Indore" },
  { value: "THANE", label: "Thane" },
  { value: "BHOPAL", label: "Bhopal" },
  { value: "VISAKHAPATNAM", label: "Visakhapatnam" },
  { value: "PIMPRI_CHINCHWAD", label: "Pimpri-Chinchwad" },
  { value: "PATNA", label: "Patna" },
  { value: "VADODARA", label: "Vadodara" },
  { value: "GHAZIABAD", label: "Ghaziabad" },
  { value: "LUDHIANA", label: "Ludhiana" },
  { value: "AGRA", label: "Agra" },
  { value: "NASHIK", label: "Nashik" },
  { value: "FARIDABAD", label: "Faridabad" },
  { value: "MEERUT", label: "Meerut" },
  { value: "RAJKOT", label: "Rajkot" },
  { value: "VARANASI", label: "Varanasi" },
  { value: "SRINAGAR", label: "Srinagar" },
  { value: "AURANGABAD", label: "Aurangabad" },
  { value: "DHANBAD", label: "Dhanbad" },
  { value: "AMRITSAR", label: "Amritsar" },
  { value: "NAVI_MUMBAI", label: "Navi Mumbai" },
  { value: "ALLAHABAD", label: "Allahabad" },
  { value: "RANCHI", label: "Ranchi" },
  { value: "HOWRAH", label: "Howrah" },
  { value: "COIMBATORE", label: "Coimbatore" },
  { value: "JABALPUR", label: "Jabalpur" },
  { value: "GWALIOR", label: "Gwalior" },
  { value: "VIJAYAWADA", label: "Vijayawada" },
  { value: "JODHPUR", label: "Jodhpur" },
  { value: "MADURAI", label: "Madurai" },
  { value: "RAIPUR", label: "Raipur" },
  { value: "KOTA", label: "Kota" },
  { value: "CHANDIGARH", label: "Chandigarh" },
  { value: "GUWAHATI", label: "Guwahati" },
  { value: "SOLAPUR", label: "Solapur" },
  { value: "HUBLI", label: "Hubli" },
  { value: "MYSORE", label: "Mysore" },
  { value: "TIRUCHIRAPPALLI", label: "Tiruchirappalli" },
  { value: "BAREILLY", label: "Bareilly" },
  { value: "ALIGARH", label: "Aligarh" },
  { value: "MORADABAD", label: "Moradabad" },
  { value: "JALANDHAR", label: "Jalandhar" },
  { value: "BHUBANESWAR", label: "Bhubaneswar" },
  { value: "NOIDA", label: "Noida" },
  { value: "GURUGRAM", label: "Gurugram" },
];

const PROFESSIONS = [
  { value: "SALARIED", label: "Salaried", emoji: "💼" },
  { value: "SELF_EMPLOYED", label: "Self Employed", emoji: "🛠️" },
  { value: "BUSINESS_OWNER", label: "Business Owner", emoji: "🏢" },
  { value: "PROFESSIONAL", label: "Professional", emoji: "👔" },
  { value: "STUDENT", label: "Student", emoji: "🎓" },
  { value: "RETIRED", label: "Retired", emoji: "🌅" },
  { value: "HOMEMAKER", label: "Homemaker", emoji: "🏠" },
];

const initialFormState = {
  name: "",
  phone: "",
  email: "",
  amount: "",
  city: "",
  profession: "",
  businessName: "",
  message: "",
};

/* ─── Searchable City Dropdown (portal-based, escapes overflow) ─── */
function CityDropdown({ value, onChange, required }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [panelStyle, setPanelStyle] = useState({});
  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const searchRef = useRef(null);

  const filtered = CITIES.filter((c) =>
    c.label.toLowerCase().includes(search.toLowerCase())
  );
  const selected = CITIES.find((c) => c.value === value);

  const openPanel = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const panelHeight = Math.min(320, spaceBelow - 8);
    setPanelStyle({
      position: "fixed",
      top: rect.bottom + 6,
      left: rect.left,
      width: rect.width,
      maxHeight: panelHeight,
      zIndex: 9999,
    });
    setIsOpen(true);
  };

  const close = () => { setIsOpen(false); setSearch(""); };

  useEffect(() => {
    const handler = (e) => {
      if (
        buttonRef.current && !buttonRef.current.contains(e.target) &&
        panelRef.current && !panelRef.current.contains(e.target)
      ) close();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (isOpen) searchRef.current?.focus();
  }, [isOpen]);

  return (
    <div className="relative">
      {/* hidden native input so form validation works */}
      <input type="text" required={required} readOnly value={value} className="sr-only" tabIndex={-1} aria-hidden />

      <button
        ref={buttonRef}
        type="button"
        onClick={() => isOpen ? close() : openPanel()}
        className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-sm text-left transition-all duration-200 bg-white
          ${isOpen ? "border-teal-500 ring-2 ring-teal-100" : "border-slate-200 hover:border-teal-300"}`}
      >
        <MapPin size={15} className="text-teal-500 shrink-0" />
        <span className={selected ? "text-slate-800 font-medium flex-1" : "text-slate-400 flex-1"}>
          {selected ? selected.label : "Select your city"}
        </span>
        <ChevronDown
          size={15}
          className={`text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && createPortal(
        <div
          ref={panelRef}
          style={panelStyle}
          className="rounded-2xl border border-slate-100 bg-white shadow-2xl overflow-hidden dropdown-enter flex flex-col"
        >
          {/* Search */}
          <div className="p-2.5 border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2">
              <Search size={13} className="text-slate-400 shrink-0" />
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search city..."
                className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-400 focus:outline-none"
              />
              {search && (
                <button type="button" onClick={() => setSearch("")} className="text-slate-400 hover:text-slate-600 transition-colors">
                  <X size={13} />
                </button>
              )}
            </div>
          </div>
          {/* List */}
          <div className="overflow-y-auto hidesidescrollbar py-1.5 flex-1">
            {filtered.length === 0 ? (
              <p className="px-4 py-3 text-sm text-slate-400 text-center">No city found</p>
            ) : (
              filtered.map((city) => (
                <button
                  key={city.value}
                  type="button"
                  onClick={() => { onChange(city.value); close(); }}
                  className={`w-full px-4 py-2.5 text-sm text-left flex items-center gap-2.5 transition-colors
                    ${value === city.value
                      ? "bg-teal-50 text-teal-700 font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-teal-600"}`}
                >
                  {value === city.value && (
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                  )}
                  <MapPin size={12} className={`shrink-0 ${value === city.value ? "text-teal-500" : "text-slate-300"}`} />
                  {city.label}
                </button>
              ))
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

/* ─── Styled input with left icon ─── */
function IconInput({ icon, ...props }) {
  const El = icon;
  return (
    <div className="relative">
      <El size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-500 pointer-events-none" />
      <input
        {...props}
        className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 bg-white
          transition-all duration-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100 hover:border-teal-300"
      />
    </div>
  );
}

/* ─── Main Modal ─── */
function LoanFormModal({ isOpen, onClose, loanType }) {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const isBusinessLoan = loanType === "Business Loan";

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const body = new URLSearchParams();
    body.append("name", formData.name);
    body.append("number", formData.phone);
    body.append("email", formData.email);
    body.append("loan_type", loanType);
    body.append("loan_amount", formData.amount);
    body.append("city", formData.city);
    body.append("profession", formData.profession);
    body.append("message", formData.message);
    if (isBusinessLoan && formData.businessName) {
      body.append("business_name", formData.businessName);
    }

    try {
      const response = await fetch(`${API_BASE}/api/apply_loan.php`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`Server error: ${response.status}`);
      const data = await response.json();
      if (!data.status) throw new Error(data.message || "Application submission failed.");
      setIsSubmitted(true);
      setFormData(initialFormState);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Loan application form"
    >
      <div
        className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl overflow-hidden modal-enter max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Gradient Header ── */}
        <div className="relative bg-linear-to-br from-teal-600 via-teal-600 to-emerald-500 px-6 py-5 shrink-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute top-2 right-24 w-6 h-6 rounded-full bg-white/10 pointer-events-none" />

          <div className="relative flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-0.5 text-[11px] font-bold text-white/90 uppercase tracking-widest mb-2">
                ✦ Connect With Expert
              </span>
              <h3 className="text-2xl font-bold text-white leading-tight">Loan Application</h3>
              <p className="text-sm text-teal-100 mt-0.5">We will get back within 24 hours.</p>
            </div>
            <div className="flex flex-col items-end gap-2 shrink-0">
              <span className="inline-block rounded-xl bg-white/25 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-white border border-white/20">
                {loanType}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="flex items-center gap-1 text-teal-100 hover:text-white transition-colors text-xs font-medium"
              >
                <X size={13} /> Close
              </button>
            </div>
          </div>
        </div>

        {/* ── Scrollable Body ── */}
        <div className="overflow-y-auto hidesidescrollbar flex-1 p-6">
          {isSubmitted ? (
            /* ── Success Screen ── */
            <div className="flex flex-col items-center justify-center py-10 success-enter">
              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-5 success-icon">
                <CheckCircle2 size={42} className="text-emerald-500" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Application Submitted!</h4>
              <p className="text-slate-500 text-center text-sm max-w-xs leading-relaxed">
                Your loan request has been received. Our expert will reach out to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 rounded-full bg-linear-to-r from-teal-600 to-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-200 hover:shadow-teal-300 hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-4 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 animate-[fieldIn_0.3s_ease-out]">
                  <span className="text-red-500 text-base shrink-0">⚠</span>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <form className="grid gap-4" onSubmit={handleSubmit}>

                {/* Row 1 – Loan Type + Amount */}
                <div className="grid gap-4 sm:grid-cols-2 form-field-item">
                  <div className="grid gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Loan Type</label>
                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <Briefcase size={15} className="text-teal-500 shrink-0" />
                      <span className="text-sm font-semibold text-slate-700">{loanType}</span>
                    </div>
                  </div>
                  <div className="grid gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400" htmlFor="amount">
                      Loan Amount (₹)
                    </label>
                    <IconInput
                      icon={IndianRupee}
                      id="amount"
                      name="amount"
                      type="number"
                      min="0"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="e.g. 500000"
                      required
                    />
                  </div>
                </div>

                {/* Row 2 – Full Name + Phone */}
                <div className="grid gap-4 sm:grid-cols-2 form-field-item">
                  <div className="grid gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400" htmlFor="name">
                      Full Name
                    </label>
                    <IconInput
                      icon={User}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400" htmlFor="phone">
                      Phone Number
                    </label>
                    <IconInput
                      icon={Phone}
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                {/* Row 3 – Email + City */}
                <div className="grid gap-4 sm:grid-cols-2 form-field-item">
                  <div className="grid gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400" htmlFor="email">
                      Email Address
                    </label>
                    <IconInput
                      icon={Mail}
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">City</label>
                    <CityDropdown
                      value={formData.city}
                      onChange={(val) => setFormData((prev) => ({ ...prev, city: val }))}
                      required
                    />
                  </div>
                </div>

                {/* Row 4 – Profession + Business Name */}
                <div className="grid gap-4 sm:grid-cols-2 form-field-item">
                  <div className="grid gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400" htmlFor="profession">
                      Profession
                    </label>
                    <div className="relative">
                      <Briefcase size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-500 pointer-events-none z-10" />
                      <select
                        id="profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        required
                        className="w-full appearance-none rounded-xl border border-slate-200 pl-10 pr-9 py-3 text-sm text-slate-800 bg-white cursor-pointer
                          transition-all duration-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100 hover:border-teal-300"
                      >
                        <option value="">Select profession</option>
                        {PROFESSIONS.map((p) => (
                          <option key={p.value} value={p.value}>
                            {p.emoji}  {p.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {isBusinessLoan && (
                    <div className="grid gap-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400" htmlFor="businessName">
                        Business Name
                      </label>
                      <IconInput
                        icon={Building2}
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Your business name"
                        required
                      />
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="grid gap-1.5 form-field-item">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400" htmlFor="message">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare size={15} className="absolute left-4 top-3.5 text-teal-500 pointer-events-none" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      required
                      placeholder="Tell us about your requirement..."
                      className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 bg-white resize-none
                        transition-all duration-200 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100 hover:border-teal-300"
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between form-field-item">
                  <p className="text-xs text-slate-400 flex items-center gap-1.5">
                    <span className="text-slate-400">🔒</span>
                    Your information is safe with us.
                  </p>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-teal-600 to-emerald-500 px-8 py-3 text-sm font-bold text-white
                      shadow-lg shadow-teal-200 transition-all duration-200 hover:shadow-teal-300 hover:scale-[1.03] active:scale-[0.98]
                      disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      "Submit Application →"
                    )}
                  </button>
                </div>

              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoanFormModal;
