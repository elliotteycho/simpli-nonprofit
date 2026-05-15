import { useState, useEffect, useCallback } from "react";

/* ─── THEME ─── */
const T = {
  purple: "#6B2FA0", purpleDark: "#4A1D6E", purpleLight: "#F3E8FF",
  pink: "#D946A8", pinkLight: "#FDF2F8",
  grad: "linear-gradient(135deg, #6B2FA0, #D946A8)",
  gradHero: "linear-gradient(135deg, #6B2FA0, #9333EA, #D946A8)",
  white: "#FFF", g50: "#FAFAFA", g100: "#F4F4F5", g200: "#E4E4E7",
  g300: "#D4D4D8", g400: "#A1A1AA", g500: "#71717A", g600: "#52525B",
  g700: "#3F3F46", g800: "#27272A", g900: "#18181B",
  green: "#10B981", greenLt: "#ECFDF5", greenDk: "#059669",
  orange: "#F59E0B", orangeLt: "#FFFBEB",
  blue: "#3B82F6", blueLt: "#EFF6FF",
  canvas: "#0F0F1A", canvasBar: "#1A1A2E", canvasBorder: "#2A2A4A",
};

/* ─── SHARED COMPONENTS ─── */
const Badge = ({ text, v = "purple" }) => {
  const m = { purple: [T.purpleLight, T.purple], green: [T.greenLt, T.greenDk], orange: [T.orangeLt, "#B45309"], blue: [T.blueLt, T.blue], pink: [T.pinkLight, T.pink] };
  const [bg, fg] = m[v] || m.purple;
  return <span style={{ background: bg, color: fg, fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 99, letterSpacing: 0.6, textTransform: "uppercase" }}>{text}</span>;
};

const ProgressBar = ({ pct, color = T.purple, animated = true }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => { if (animated) { const t = setTimeout(() => setWidth(pct), 50); return () => clearTimeout(t); } setWidth(pct); }, [pct, animated]);
  return (
    <div style={{ width: "100%", height: 6, background: T.g200, borderRadius: 99, overflow: "hidden" }}>
      <div style={{ width: `${width}%`, height: "100%", background: color === "gradient" ? T.grad : color, borderRadius: 99, transition: animated ? "width 0.8s cubic-bezier(0.4,0,0.2,1)" : "none" }} />
    </div>
  );
};

const Check = ({ done, label, onClick }) => (
  <div onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", cursor: onClick ? "pointer" : "default", transition: "all 0.2s" }}>
    <div style={{
      width: 20, height: 20, borderRadius: 6, flexShrink: 0,
      background: done ? T.green : "transparent",
      border: done ? "none" : `2px solid ${T.g300}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 12, color: T.white, fontWeight: 700,
      transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
      transform: done ? "scale(1)" : "scale(0.95)",
    }}>
      {done && "✓"}
    </div>
    <span style={{ fontSize: 13, fontWeight: 500, color: done ? T.g400 : T.g800, textDecoration: done ? "line-through" : "none", transition: "all 0.3s" }}>{label}</span>
  </div>
);

const Btn = ({ children, primary, small, outline, full, onClick, disabled, style: sx }) => {
  const [hover, setHover] = useState(false);
  const base = {
    padding: small ? "8px 16px" : "12px 24px", fontSize: small ? 12 : 14, fontWeight: 600,
    border: "none", borderRadius: 10, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
    width: full ? "100%" : "auto", transition: "all 0.2s", opacity: disabled ? 0.5 : 1,
    transform: hover && !disabled ? "translateY(-1px)" : "translateY(0)",
    boxShadow: hover && primary && !disabled ? "0 4px 16px rgba(107,47,160,0.4)" : primary ? "0 2px 8px rgba(107,47,160,0.3)" : "none",
    ...sx,
  };
  if (primary) Object.assign(base, { background: T.grad, color: T.white });
  else if (outline) Object.assign(base, { background: "transparent", border: `1.5px solid ${T.g300}`, color: T.g700 });
  else Object.assign(base, { background: T.g100, color: T.g700 });
  return <button onClick={onClick} disabled={disabled} style={base} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{children}</button>;
};

const Input = ({ placeholder, icon, value, onChange }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8,
      background: T.g50, border: `1.5px solid ${focused ? T.purple : T.g200}`,
      borderRadius: 10, padding: "10px 14px", transition: "border-color 0.2s",
    }}>
      {icon && <span style={{ fontSize: 14 }}>{icon}</span>}
      <input
        type="text" placeholder={placeholder} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ flex: 1, border: "none", background: "transparent", fontSize: 13, color: T.g800 }}
      />
    </div>
  );
};

const StatusBar = () => (
  <div style={{ height: 44, padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    <span style={{ fontSize: 14, fontWeight: 600, color: T.white }}>9:41</span>
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <div style={{ display: "flex", gap: 1, alignItems: "flex-end" }}>{[5,7,9,11].map((h,i) => <div key={i} style={{ width: 3, height: h, background: i < 3 ? "white" : "rgba(255,255,255,0.4)", borderRadius: 1 }} />)}</div>
      <div style={{ width: 24, height: 11, borderRadius: 3, border: "1px solid rgba(255,255,255,0.5)", padding: 1, display: "flex" }}>
        <div style={{ width: "75%", background: T.green, borderRadius: 2 }} />
      </div>
    </div>
  </div>
);

const NavBar = ({ title, onBack }) => (
  <div style={{ background: T.gradHero }}>
    <StatusBar />
    <div style={{ height: 48, display: "flex", alignItems: "center", padding: "0 16px", gap: 12 }}>
      {onBack && <span onClick={onBack} style={{ color: "rgba(255,255,255,0.85)", fontSize: 22, fontWeight: 300, cursor: "pointer", lineHeight: 1 }}>‹</span>}
      <span style={{ flex: 1, textAlign: "center", color: T.white, fontSize: 17, fontWeight: 600 }}>{title}</span>
      <span style={{ width: 24 }} />
    </div>
  </div>
);

const BottomNav = ({ active = 0, onNav }) => {
  const tabs = [{ icon: "⌂", label: "Home" }, { icon: "◇", label: "Matches" }, { icon: "◉", label: "Impact" }, { icon: "⚙", label: "Settings" }];
  return (
    <div style={{ display: "flex", borderTop: `1px solid ${T.g200}`, background: T.white, padding: "6px 0 10px", marginTop: "auto" }}>
      {tabs.map((t, i) => (
        <div key={i} onClick={() => onNav?.(i)} style={{ flex: 1, textAlign: "center", cursor: "pointer", transition: "all 0.2s" }}>
          <div style={{ fontSize: 18, color: i === active ? T.purple : T.g400, lineHeight: 1 }}>{t.icon}</div>
          <div style={{ fontSize: 9, fontWeight: 600, color: i === active ? T.purple : T.g400, marginTop: 2 }}>{t.label}</div>
        </div>
      ))}
    </div>
  );
};

/* ─── SCREEN 1: POST-CALL LANDING ─── */
function Screen1({ onNext }) {
  const [checks, setChecks] = useState([true, true, false, false]);
  return (
    <div className="screen-enter" style={{ background: T.white, minHeight: 700, display: "flex", flexDirection: "column" }}>
      <div style={{ background: T.gradHero, padding: "0 0 32px", borderRadius: "0 0 24px 24px" }}>
        <StatusBar />
        <div style={{ padding: "16px 24px 0", textAlign: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: 20, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 28 }}>📦</div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: T.white, margin: "0 0 8px", lineHeight: 1.3 }}>Welcome to Simpli</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", margin: 0 }}>Nashville Food Bank</p>
        </div>
      </div>
      <div style={{ margin: "-20px 20px 0", position: "relative", zIndex: 2 }}>
        <div style={{ background: T.white, borderRadius: 16, padding: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: `1px solid ${T.g100}` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: T.purple, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>Your Potential Impact</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[{ val: "$47,500", label: "Est. donation value nearby", icon: "💰" }, { val: "3", label: "Active donors in your area", icon: "🏢" }, { val: "12", label: "Pallets available this month", icon: "📦" }, { val: "850+", label: "Families you could serve", icon: "❤️" }].map((s, i) => (
              <div key={i} className="fade-in" style={{ display: "flex", gap: 10, alignItems: "flex-start", animationDelay: `${i * 0.1}s`, animationFillMode: "backwards" }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: T.purpleLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{s.icon}</div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: T.g900 }}>{s.val}</div>
                  <div style={{ fontSize: 10, color: T.g500, lineHeight: 1.3 }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding: "20px 20px 8px" }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: T.g800, marginBottom: 4 }}>Get started in 5 minutes</div>
        <div style={{ fontSize: 12, color: T.g500, marginBottom: 12 }}>Complete setup to start receiving donations</div>
        {["Intro call with Simpli team", "Basic organization info collected", "Upload verification documents", "Confirm distribution center"].map((label, i) => (
          <Check key={i} done={checks[i]} label={label} onClick={i >= 2 ? () => { const c = [...checks]; c[i] = !c[i]; setChecks(c); } : undefined} />
        ))}
      </div>
      <div style={{ padding: "8px 20px 28px", marginTop: "auto" }}>
        <Btn primary full onClick={onNext}>Continue Setup →</Btn>
        <div style={{ textAlign: "center", fontSize: 11, color: T.g400, marginTop: 8 }}>Average completion: 5 minutes</div>
      </div>
    </div>
  );
}

/* ─── SCREEN 2: DOC UPLOAD ─── */
function Screen2({ onNext, onBack }) {
  const [uploads, setUploads] = useState([false, false, false]);
  const [step, setStep] = useState(1);
  const pct = uploads.filter(Boolean).length * 33 + (uploads[2] ? 1 : 0);

  const toggleUpload = (i) => {
    const u = [...uploads];
    u[i] = !u[i];
    setUploads(u);
    if (!u[i]) return;
    // auto advance step
    const done = u.filter(Boolean).length;
    setStep(Math.min(done + 1, 3));
  };

  return (
    <div className="screen-enter" style={{ background: T.white, minHeight: 700, display: "flex", flexDirection: "column" }}>
      <NavBar title="Verify Organization" onBack={onBack} />
      <div style={{ padding: "16px 20px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, marginBottom: 8 }}>
          <span style={{ fontWeight: 600, color: T.purple }}>Step {step} of 3</span>
          <span style={{ color: T.g400 }}>{pct}%</span>
        </div>
        <ProgressBar pct={pct} color="gradient" />
      </div>
      <div style={{ padding: "20px", flex: 1 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: T.g900, margin: "0 0 4px" }}>Upload Documents</h2>
        <p style={{ fontSize: 13, color: T.g500, margin: "0 0 20px", lineHeight: 1.5 }}>We need a few documents to verify your org. This unlocks premium corporate donations.</p>
        {[
          { name: "IRS 990 Form", desc: "Most recent annual filing", req: true, icon: "📋" },
          { name: "Certificate of Insurance", desc: "General liability COI", req: true, icon: "🛡️" },
          { name: "W-9 Form", desc: "Tax identification", req: false, icon: "📄" },
        ].map((doc, i) => (
          <div key={i} onClick={() => toggleUpload(i)} style={{
            border: `1.5px ${uploads[i] ? "solid" : "dashed"} ${uploads[i] ? T.green : doc.req ? T.purple + "44" : T.g300}`,
            borderRadius: 14, padding: 16, marginBottom: 12,
            display: "flex", alignItems: "center", gap: 14,
            background: uploads[i] ? T.greenLt : doc.req ? T.purpleLight + "40" : T.g50,
            cursor: "pointer", transition: "all 0.3s",
          }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: T.white, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", transition: "all 0.3s" }}>
              {uploads[i] ? "✅" : doc.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: T.g800 }}>{doc.name}</div>
              <div style={{ fontSize: 11, color: uploads[i] ? T.greenDk : T.g500 }}>{uploads[i] ? "Uploaded successfully" : doc.desc}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
              {!uploads[i] && <Badge text={doc.req ? "Required" : "Optional"} v={doc.req ? "orange" : "blue"} />}
              {uploads[i] && <Badge text="Done" v="green" />}
              {!uploads[i] && <span style={{ fontSize: 12, color: T.purple, fontWeight: 600 }}>Upload ↑</span>}
            </div>
          </div>
        ))}
        <div style={{ background: T.purpleLight, borderRadius: 12, padding: 14, display: "flex", gap: 10, marginTop: 8 }}>
          <span style={{ fontSize: 16, flexShrink: 0 }}>💡</span>
          <span style={{ fontSize: 12, color: T.purple, lineHeight: 1.5, fontWeight: 500 }}>Don't have these handy? Skip for now and upload later. You'll still see available donations.</span>
        </div>
      </div>
      <div style={{ padding: "8px 20px 28px", display: "flex", gap: 10 }}>
        <Btn outline onClick={onNext}>Skip for now</Btn>
        <div style={{ flex: 1 }}><Btn primary full onClick={onNext}>Continue →</Btn></div>
      </div>
    </div>
  );
}

/* ─── SCREEN 3: DASHBOARD ─── */
function Screen3({ onNext, onBack }) {
  const [readiness, setReadiness] = useState(0);
  const [checks, setChecks] = useState([true, true, true, false, false]);
  useEffect(() => { setTimeout(() => setReadiness(72), 100); }, []);
  const toggleCheck = (i) => {
    if (i < 3) return;
    const c = [...checks]; c[i] = !c[i]; setChecks(c);
    const doneCount = c.filter(Boolean).length;
    setReadiness(Math.round((doneCount / 5) * 100));
  };

  return (
    <div className="screen-enter" style={{ background: T.g50, minHeight: 700, display: "flex", flexDirection: "column" }}>
      <div style={{ background: T.gradHero, borderRadius: "0 0 24px 24px", paddingBottom: 24 }}>
        <StatusBar />
        <div style={{ padding: "0 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <span style={{ color: T.white, fontSize: 17, fontWeight: 700, letterSpacing: -0.3 }}>simpli</span>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ position: "relative" }}>
                <span style={{ color: T.white, fontSize: 18 }}>🔔</span>
                <div style={{ position: "absolute", top: -2, right: -2, width: 8, height: 8, borderRadius: 4, background: T.orange, border: `2px solid ${T.purple}` }} />
              </div>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: T.white, fontSize: 13, fontWeight: 700 }}>NF</div>
            </div>
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, color: T.white, marginBottom: 4 }}>Good morning,</div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", marginBottom: 14 }}>Nashville Food Bank</div>
          <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 14, padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>Match Readiness</span>
              <span style={{ fontSize: 20, fontWeight: 800, color: T.white }}>{readiness}%</span>
            </div>
            <ProgressBar pct={readiness} color={T.green} />
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 16px 0", flex: 1, overflowY: "auto" }}>
        {/* Alert */}
        <div onClick={onNext} style={{ background: T.white, borderRadius: 16, padding: 16, marginBottom: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: `1px solid ${T.orange}33`, cursor: "pointer", transition: "transform 0.2s" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: T.orangeLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>⚡</div>
            <span style={{ fontSize: 14, fontWeight: 700, color: T.g900 }}>1 Donation Available</span>
            <Badge text="New" v="orange" />
          </div>
          <p style={{ fontSize: 12, color: T.g600, margin: "0 0 12px", lineHeight: 1.5, paddingLeft: 36 }}>Beauty & personal care company has 8 pallets in Nashville.</p>
          <div style={{ paddingLeft: 36 }}><Btn primary small>View Details →</Btn></div>
        </div>

        {/* Checklist */}
        <div style={{ background: T.white, borderRadius: 16, padding: 16, marginBottom: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: T.g800, marginBottom: 8 }}>Complete Your Profile</div>
          {["Organization verified", "990 form uploaded", "COI on file", "Pallet capacity confirmed", "Distribution center added"].map((label, i) => (
            <Check key={i} done={checks[i]} label={label} onClick={() => toggleCheck(i)} />
          ))}
          <div style={{ marginTop: 10 }}><Btn primary small onClick={() => { const c = [...checks]; const idx = c.findIndex(x => !x); if (idx >= 0) { c[idx] = true; setChecks(c); setReadiness(Math.round(c.filter(Boolean).length / 5 * 100)); } }}>Complete Next Step</Btn></div>
        </div>

        {/* Impact */}
        <div style={{ background: T.white, borderRadius: 16, padding: 16, marginBottom: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: T.g800, marginBottom: 12 }}>Your Simpli Impact</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div style={{ textAlign: "center", padding: 12, background: T.purpleLight, borderRadius: 12 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: T.purple }}>$0</div>
              <div style={{ fontSize: 10, color: T.g500, fontWeight: 500, marginTop: 2 }}>Donations received</div>
            </div>
            <div style={{ textAlign: "center", padding: 12, background: T.greenLt, borderRadius: 12 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: T.green }}>0</div>
              <div style={{ fontSize: 10, color: T.g500, fontWeight: 500, marginTop: 2 }}>Pallets accepted</div>
            </div>
          </div>
        </div>

        {/* Nearby */}
        <div style={{ background: T.white, borderRadius: 16, padding: 16, marginBottom: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: T.g800, marginBottom: 10 }}>Activity Near You</div>
          {[{ charity: "Second Harvest", amt: "$12,400", when: "2 days ago" }, { charity: "Room in the Inn", amt: "$8,200", when: "1 week ago" }, { charity: "Nashville Rescue Mission", amt: "$23,100", when: "2 weeks ago" }].map((a, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < 2 ? `1px solid ${T.g100}` : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: T.greenLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: T.green }}>{a.charity[0]}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: T.g700 }}>{a.charity}</div>
                  <div style={{ fontSize: 10, color: T.g400 }}>{a.when}</div>
                </div>
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: T.green }}>{a.amt}</span>
            </div>
          ))}
        </div>
      </div>
      <BottomNav active={0} />
    </div>
  );
}

/* ─── SCREEN 4: DONATION MATCH ─── */
function Screen4({ onNext, onBack }) {
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [phone, setPhone] = useState("");
  const [capacity, setCapacity] = useState(null);
  const [accepted, setAccepted] = useState(false);

  const canAccept = address.length > 0 && capacity !== null;

  if (accepted) {
    return (
      <div className="screen-enter" style={{ background: T.white, minHeight: 700, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 40, textAlign: "center" }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: T.g900, margin: "0 0 8px" }}>Donation Accepted!</h2>
        <p style={{ fontSize: 14, color: T.g500, lineHeight: 1.6, marginBottom: 24 }}>The delivery team will contact you within 48 hours to confirm logistics.</p>
        <div style={{ background: T.greenLt, borderRadius: 14, padding: 20, width: "100%", marginBottom: 24 }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: T.green }}>$23,400</div>
          <div style={{ fontSize: 12, color: T.g500 }}>in donated goods coming your way</div>
        </div>
        <Btn primary onClick={onNext}>View Impact Report →</Btn>
      </div>
    );
  }

  return (
    <div className="screen-enter" style={{ background: T.white, minHeight: 700, display: "flex", flexDirection: "column" }}>
      <NavBar title="Donation Match" onBack={onBack} />
      <div style={{ background: T.gradHero, padding: "24px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 40, marginBottom: 4 }}>🎉</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: T.white }}>You've Been Matched!</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginTop: 6 }}>A donation is ready for your organization</div>
      </div>

      <div style={{ padding: "16px 20px", flex: 1, overflowY: "auto" }}>
        <div style={{ background: T.white, borderRadius: 16, padding: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: `1px solid ${T.g100}`, marginTop: -20, position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.g400, textTransform: "uppercase", letterSpacing: 1 }}>Donor</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: T.g900, marginTop: 4 }}>Fortune 500 Beauty Brand</div>
            </div>
            <Badge text="New Match" v="green" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[{ l: "Estimated Value", v: "$23,400", big: true }, { l: "Pallets", v: "8", big: true }, { l: "Category", v: "Personal Care" }, { l: "Delivery Window", v: "May 1 — May 15" }].map((d, i) => (
              <div key={i}>
                <div style={{ fontSize: 10, fontWeight: 600, color: T.g400, textTransform: "uppercase", letterSpacing: 0.5 }}>{d.l}</div>
                <div style={{ fontSize: d.big ? 22 : 14, fontWeight: d.big ? 800 : 600, color: T.g900, marginTop: 4 }}>{d.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: T.g800, marginBottom: 14 }}>Confirm to accept:</div>

          <div style={{ border: `1.5px solid ${address ? T.green + "66" : T.purple + "33"}`, borderRadius: 14, padding: 16, marginBottom: 12, background: address ? T.greenLt + "40" : T.purpleLight + "30", transition: "all 0.3s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 16 }}>📍</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: T.g800 }}>Delivery Address</span>
              {!address && <Badge text="Required" v="orange" />}
              {address && <Badge text="Done" v="green" />}
            </div>
            <Input placeholder="Enter warehouse or facility address..." icon="🏢" value={address} onChange={e => setAddress(e.target.value)} />
          </div>

          <div style={{ border: `1.5px solid ${capacity !== null ? T.green + "66" : T.g200}`, borderRadius: 14, padding: 16, marginBottom: 12, background: capacity !== null ? T.greenLt + "40" : T.white, transition: "all 0.3s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 16 }}>📦</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: T.g800 }}>Pallet Capacity</span>
              {capacity !== null && <Badge text="Confirmed" v="green" />}
            </div>
            <div style={{ fontSize: 12, color: T.g500, marginBottom: 10 }}>Can you receive 8 pallets within the delivery window?</div>
            <div style={{ display: "flex", gap: 8 }}>
              <Btn primary={capacity === "full"} outline={capacity !== "full"} small onClick={() => setCapacity("full")}>Yes, 8 pallets</Btn>
              <Btn primary={capacity === "partial"} outline={capacity !== "partial"} small onClick={() => setCapacity("partial")}>Request fewer</Btn>
            </div>
          </div>

          <div style={{ border: `1.5px solid ${T.g200}`, borderRadius: 14, padding: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 16 }}>👤</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: T.g800 }}>Receiving Contact</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Input placeholder="Contact name" icon="✏️" value={contact} onChange={e => setContact(e.target.value)} />
              <Input placeholder="Phone number" icon="📱" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 20px 28px", display: "flex", gap: 10 }}>
        <Btn outline onClick={onBack}>Decline</Btn>
        <div style={{ flex: 1 }}><Btn primary full disabled={!canAccept} onClick={() => setAccepted(true)}>Accept Donation →</Btn></div>
      </div>
    </div>
  );
}

/* ─── SCREEN 5: IMPACT REPORT ─── */
function Screen5({ onBack, onRestart }) {
  const [photos, setPhotos] = useState(0);
  const [showTotal, setShowTotal] = useState(false);
  useEffect(() => { setTimeout(() => setShowTotal(true), 300); }, []);

  return (
    <div className="screen-enter" style={{ background: T.g50, minHeight: 700, display: "flex", flexDirection: "column" }}>
      <div style={{ background: T.gradHero, borderRadius: "0 0 24px 24px" }}>
        <StatusBar />
        <div style={{ padding: "0 20px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: T.white, fontSize: 17, fontWeight: 700 }}>Impact Report</span>
          <Btn small style={{ background: "rgba(255,255,255,0.15)", color: T.white, border: "none", fontSize: 12, boxShadow: "none" }}>Share ↗</Btn>
        </div>
      </div>

      <div style={{ padding: "0 16px", marginTop: -12, flex: 1, overflowY: "auto" }}>
        <div style={{ background: T.white, borderRadius: 20, padding: 24, textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", marginBottom: 14 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: T.g400, textTransform: "uppercase", letterSpacing: 1 }}>Your Total Impact</div>
          <div style={{ fontSize: showTotal ? 42 : 0, fontWeight: 900, background: T.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginTop: 4, transition: "font-size 0.6s cubic-bezier(0.34,1.56,0.64,1)" }}>$23,400</div>
          <div style={{ fontSize: 13, color: T.g500, marginTop: 2 }}>in donated goods received</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 20 }}>
            {[{ val: "8", label: "Pallets", color: T.purple }, { val: "1,200", label: "People Served", color: T.green }, { val: "4.2t", label: "Waste Diverted", color: T.blue }].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 24, fontWeight: 800, color: s.color }}>{s.val}</div>
                <div style={{ fontSize: 10, color: T.g500, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: T.white, borderRadius: 16, padding: 16, marginBottom: 14, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: T.g800, marginBottom: 4 }}>Share Your Impact</div>
          <div style={{ fontSize: 12, color: T.g500, marginBottom: 14, lineHeight: 1.5 }}>Upload photos from your distribution. Donors love seeing the impact.</div>
          <div onClick={() => setPhotos(p => p + 1)} style={{ border: `2px dashed ${T.purple}33`, borderRadius: 14, padding: 24, textAlign: "center", background: T.purpleLight + "40", cursor: "pointer", transition: "all 0.2s" }}>
            {photos === 0 ? <>
              <div style={{ fontSize: 28 }}>📸</div>
              <div style={{ fontSize: 13, color: T.purple, fontWeight: 600, marginTop: 6 }}>Tap to upload photos</div>
            </> : <>
              <div style={{ fontSize: 28 }}>✅</div>
              <div style={{ fontSize: 13, color: T.greenDk, fontWeight: 600, marginTop: 6 }}>{photos} photo{photos > 1 ? "s" : ""} uploaded</div>
              <div style={{ fontSize: 11, color: T.purple, marginTop: 4 }}>Tap to add more</div>
            </>}
          </div>
        </div>

        <div style={{ background: T.white, borderRadius: 16, padding: 20, textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", border: `1px solid ${T.green}33`, marginBottom: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: T.greenLt, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 22 }}>🎯</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: T.g800 }}>Ready for more?</div>
          <div style={{ fontSize: 12, color: T.g500, marginTop: 6, marginBottom: 14, lineHeight: 1.5 }}>2 more donations available in Nashville. Keep your profile updated to stay eligible.</div>
          <Btn primary onClick={onRestart}>Browse Available Donations</Btn>
        </div>
      </div>
      <BottomNav active={2} />
    </div>
  );
}

/* ─── MAIN APP ─── */
export default function App() {
  const [screen, setScreen] = useState(0);
  const [key, setKey] = useState(0); // force re-render on screen change

  const go = useCallback((s) => { setScreen(s); setKey(k => k + 1); }, []);

  const screens = [
    { label: "Post-Call Landing", phase: "Phase 1 → 2", note: "Value-first welcome. Show impact before asking for data." },
    { label: "Document Upload", phase: "Phase 2", note: "3 docs instead of 13 sections. Click docs to simulate upload." },
    { label: "Charity Dashboard", phase: "Engagement Layer", note: "Match readiness gamifies completion. Click alert for donation match." },
    { label: "Donation Match", phase: "Phase 3", note: "Fill in fields to enable Accept. Just-in-time data collection." },
    { label: "Impact Report", phase: "Retention", note: "Click photo area to simulate upload. Browse button loops back." },
  ];

  const screenComponents = [
    <Screen1 key={key} onNext={() => go(1)} />,
    <Screen2 key={key} onNext={() => go(2)} onBack={() => go(0)} />,
    <Screen3 key={key} onNext={() => go(3)} onBack={() => go(1)} />,
    <Screen4 key={key} onNext={() => go(4)} onBack={() => go(2)} />,
    <Screen5 key={key} onBack={() => go(3)} onRestart={() => go(0)} />,
  ];

  return (
    <div style={{ minHeight: "100vh", background: T.canvas }}>
      {/* Top bar */}
      <div style={{ background: T.canvasBar, borderBottom: `1px solid ${T.canvasBorder}`, padding: "10px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: T.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: T.white, fontWeight: 700 }}>S</div>
            <span style={{ fontWeight: 700, fontSize: 14, color: T.white }}>Simpli</span>
          </div>
          <span style={{ color: T.canvasBorder }}>|</span>
          <span style={{ fontSize: 12, color: T.g500 }}>Charity Activation — Interactive Prototype</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Badge text="Product Space x Simpli" v="purple" />
          <span style={{ fontSize: 11, color: T.g500 }}>April 2026</span>
        </div>
      </div>

      {/* Screen tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, padding: "20px 24px 10px", flexWrap: "wrap" }}>
        {screens.map((s, i) => (
          <button key={i} onClick={() => go(i)} style={{
            padding: "10px 18px", borderRadius: 10, fontFamily: "inherit",
            border: screen === i ? `2px solid ${T.purple}` : `1px solid ${T.canvasBorder}`,
            background: screen === i ? T.purple + "22" : T.canvasBar,
            color: screen === i ? "#C084FC" : T.g500,
            fontSize: 12, fontWeight: screen === i ? 700 : 500,
            cursor: "pointer", transition: "all 0.2s",
          }}>
            {i + 1}. {s.label}
          </button>
        ))}
      </div>

      {/* Phase indicator */}
      <div style={{ textAlign: "center", padding: "8px 0 4px" }}>
        <Badge text={screens[screen].phase} v="pink" />
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "8px 0 20px" }}>
        {screens.map((_, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div onClick={() => go(i)} style={{
              width: 28, height: 28, borderRadius: 8,
              background: i === screen ? T.grad : T.canvasBar,
              border: i === screen ? "none" : `1px solid ${T.canvasBorder}`,
              color: i === screen ? T.white : T.g500,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, fontWeight: 700, cursor: "pointer", transition: "all 0.3s",
            }}>{i + 1}</div>
            {i < screens.length - 1 && <div style={{ width: 36, height: 2, background: i < screen ? T.purple : T.canvasBorder, borderRadius: 1, transition: "background 0.3s" }} />}
          </div>
        ))}
      </div>

      {/* Phone + Notes */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: 40, padding: "0 40px 60px" }}>
        {/* Phone frame */}
        <div style={{
          width: 375, borderRadius: 40, overflow: "hidden", background: T.white,
          boxShadow: "0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)",
          border: "8px solid #1A1A1A", position: "relative", flexShrink: 0,
        }}>
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 120, height: 28, background: "#1A1A1A", borderRadius: "0 0 16px 16px", zIndex: 10 }} />
          <div style={{ height: 700, overflowY: "auto" }}>
            {screenComponents[screen]}
          </div>
        </div>

        {/* Interaction guide */}
        <div style={{ width: 280, paddingTop: 20 }}>
          <div style={{ background: T.canvasBar, borderRadius: 14, border: `1px solid ${T.canvasBorder}`, overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: `1px solid ${T.canvasBorder}`, display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: T.green }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: T.white }}>Try It Out</span>
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ fontSize: 12, color: "#A78BFA", lineHeight: 1.6, marginBottom: 12 }}>{screens[screen].note}</div>
              <div style={{ borderTop: `1px solid ${T.canvasBorder}`, paddingTop: 12 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: T.g500, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Interactive Elements</div>
                {screen === 0 && <>
                  <div style={{ fontSize: 11, color: T.g400, marginBottom: 6, lineHeight: 1.4 }}>• Toggle the unchecked items on/off</div>
                  <div style={{ fontSize: 11, color: T.g400, marginBottom: 6, lineHeight: 1.4 }}>• Click "Continue Setup" to advance</div>
                </>}
                {screen === 1 && <>
                  <div style={{ fontSize: 11, color: T.g400, marginBottom: 6, lineHeight: 1.4 }}>• Click each document to simulate upload</div>
                  <div style={{ fontSize: 11, color: T.g400, marginBottom: 6, lineHeight: 1.4 }}>• Watch the progress bar fill</div>
                  <div style={{ fontSize: 11, color: T.g400, marginBottom: 6, lineHeight: 1.4 }}>• Skip or Continue to advance</div>
                </>}
                {screen === 2 && <>
                  <div style={{ fontSize: 11, color: T.g400, marginBottom: 6, lineHeight: 1.4 }}>• Match readiness updates as you check items</div>
                  <div style={{ fontSize: 11, color: T.g400, marginBottom: 6, lineHeight: 1.4 }}>• Click "Complete Next Step" to auto-check</div>
                  <div style={{ fontSize: 11, color: T.g400, marginBottom: 6, lineHeight: 1.4 }}>• Click the donation alert to go to Screen 4</div>
                </>}
                {screen === 3 && <>
                  <div style={{ fontSize: 11, color: T.g400, marginBottom: 6, lineHeight: 1.4 }}>• Type in the address field</div>
                  <div style={{ fontSize: 11, color: T.g400, marginBottom: 6, lineHeight: 1.4 }}>• Select pallet capacity option</div>
                  <div style={{ fontSize: 11, color: T.g400, marginBottom: 6, lineHeight: 1.4 }}>• "Accept" enables when required fields are filled</div>
                  <div style={{ fontSize: 11, color: T.g400, marginBottom: 6, lineHeight: 1.4 }}>• Accept shows a confirmation animation</div>
                </>}
                {screen === 4 && <>
                  <div style={{ fontSize: 11, color: T.g400, marginBottom: 6, lineHeight: 1.4 }}>• Impact number animates in on load</div>
                  <div style={{ fontSize: 11, color: T.g400, marginBottom: 6, lineHeight: 1.4 }}>• Click photo upload area (counter increments)</div>
                  <div style={{ fontSize: 11, color: T.g400, marginBottom: 6, lineHeight: 1.4 }}>• "Browse Donations" loops back to start</div>
                </>}
              </div>
            </div>
          </div>

          {/* Keyboard nav hint */}
          <div style={{ marginTop: 16, padding: "10px 16px", background: T.canvasBar, borderRadius: 10, border: `1px solid ${T.canvasBorder}` }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: T.g500, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>Navigation</div>
            <div style={{ fontSize: 11, color: T.g400 }}>Use the tabs above or click through the prototype naturally using the buttons inside the phone.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
