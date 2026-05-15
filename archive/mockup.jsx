import { useState } from "react";

/* ─── PRODUCT SPACE THEME ─── */
const T = {
  purple: "#6B2FA0", purpleDk: "#4A1D6E", purpleLt: "#F3E8FF",
  pink: "#D946A8", pinkLt: "#FDF2F8",
  grad: "linear-gradient(135deg, #6B2FA0, #D946A8)",
  gradHero: "linear-gradient(135deg, #6B2FA0, #9333EA, #D946A8)",
  white: "#FFF", g50: "#FAFAFA", g100: "#F4F4F5", g200: "#E4E4E7",
  g300: "#D4D4D8", g400: "#A1A1AA", g500: "#71717A", g600: "#52525B",
  g700: "#3F3F46", g800: "#27272A", g900: "#18181B",
  green: "#10B981", greenLt: "#ECFDF5", greenDk: "#059669",
  orange: "#F59E0B", orangeLt: "#FFFBEB",
  blue: "#3B82F6", blueLt: "#EFF6FF",
  canvas: "#0F0F1A", bar: "#1A1A2E", border: "#2A2A4A",
};
const PHONE_W = 375;
const PHONE_H = 812;
const font = "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif";

/* ─── REUSABLE ATOMS ─── */
const Badge = ({ text, v = "purple" }) => {
  const m = { purple: [T.purpleLt, T.purple], green: [T.greenLt, T.greenDk], orange: [T.orangeLt, "#B45309"], blue: [T.blueLt, T.blue], pink: [T.pinkLt, T.pink] };
  const [bg, fg] = m[v] || m.purple;
  return <span style={{ background: bg, color: fg, fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 99, letterSpacing: 0.6, textTransform: "uppercase", display: "inline-block" }}>{text}</span>;
};

const Bar = ({ pct, color = T.purple }) => (
  <div style={{ width: "100%", height: 6, background: T.g200, borderRadius: 99, overflow: "hidden" }}>
    <div style={{ width: `${pct}%`, height: "100%", background: color === "grad" ? T.grad : color, borderRadius: 99 }} />
  </div>
);

const Chk = ({ done, label }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0" }}>
    <div style={{ width: 20, height: 20, borderRadius: 6, flexShrink: 0, background: done ? T.green : "transparent", border: done ? "none" : `2px solid ${T.g300}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: T.white, fontWeight: 700 }}>
      {done && "✓"}
    </div>
    <span style={{ fontSize: 13, fontWeight: 500, color: done ? T.g400 : T.g800, textDecoration: done ? "line-through" : "none" }}>{label}</span>
  </div>
);

const Btn = ({ children, primary, small, outline, full }) => {
  const base = { padding: small ? "8px 16px" : "12px 24px", fontSize: small ? 12 : 14, fontWeight: 600, border: "none", borderRadius: 10, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, width: full ? "100%" : "auto" };
  if (primary) Object.assign(base, { background: T.grad, color: T.white, boxShadow: "0 2px 8px rgba(107,47,160,0.3)" });
  else if (outline) Object.assign(base, { background: "transparent", border: `1.5px solid ${T.g300}`, color: T.g700 });
  else Object.assign(base, { background: T.g100, color: T.g700 });
  return <button style={base}>{children}</button>;
};

const InputBox = ({ placeholder, icon }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, background: T.g50, border: `1.5px solid ${T.g200}`, borderRadius: 10, padding: "10px 14px" }}>
    {icon && <span style={{ fontSize: 14 }}>{icon}</span>}
    <span style={{ fontSize: 13, color: T.g400, flex: 1 }}>{placeholder}</span>
  </div>
);

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

const NavHeader = ({ title, back }) => (
  <div style={{ background: T.gradHero }}>
    <StatusBar />
    <div style={{ height: 48, display: "flex", alignItems: "center", padding: "0 16px", gap: 12 }}>
      {back && <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 22, fontWeight: 300, lineHeight: 1 }}>‹</span>}
      <span style={{ flex: 1, textAlign: "center", color: T.white, fontSize: 17, fontWeight: 600 }}>{title}</span>
      <span style={{ width: 24 }} />
    </div>
  </div>
);

const BottomNav = ({ active = 0 }) => {
  const tabs = [{ icon: "⌂", label: "Home" }, { icon: "◇", label: "Matches" }, { icon: "◉", label: "Impact" }, { icon: "⚙", label: "Settings" }];
  return (
    <div style={{ display: "flex", borderTop: `1px solid ${T.g200}`, background: T.white, padding: "8px 0 20px", position: "absolute", bottom: 0, left: 0, right: 0 }}>
      {tabs.map((t, i) => (
        <div key={i} style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 18, color: i === active ? T.purple : T.g400, lineHeight: 1 }}>{t.icon}</div>
          <div style={{ fontSize: 9, fontWeight: 600, color: i === active ? T.purple : T.g400, marginTop: 2 }}>{t.label}</div>
        </div>
      ))}
    </div>
  );
};

/* ─── PHONE FRAME WRAPPER ─── */
const Phone = ({ children, label, sublabel }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, flexShrink: 0 }}>
    {/* Label */}
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: T.white, letterSpacing: 0.3 }}>{label}</div>
      {sublabel && <div style={{ fontSize: 10, color: T.g500, marginTop: 2 }}>{sublabel}</div>}
    </div>
    {/* Device */}
    <div style={{
      width: PHONE_W, height: PHONE_H, borderRadius: 40, overflow: "hidden",
      background: T.white, position: "relative",
      boxShadow: "0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
      border: "8px solid #1A1A1A",
    }}>
      {/* Notch */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 120, height: 28, background: "#1A1A1A", borderRadius: "0 0 16px 16px", zIndex: 10 }} />
      {/* Content */}
      <div style={{ width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
        {children}
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   SCREEN 1: POST-CALL LANDING (1 frame)
   ═══════════════════════════════════════════════════════════════ */
const S1 = () => (
  <div style={{ background: T.white, height: PHONE_H - 16 }}>
    {/* Hero gradient */}
    <div style={{ background: T.gradHero, padding: "0 0 32px", borderRadius: "0 0 24px 24px" }}>
      <StatusBar />
      <div style={{ padding: "12px 24px 0", textAlign: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: 18, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 24 }}>📦</div>
        <h1 style={{ fontSize: 21, fontWeight: 700, color: T.white, margin: "0 0 6px", lineHeight: 1.3, fontFamily: font }}>Welcome to Simpli</h1>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", margin: 0, fontFamily: font }}>Nashville Food Bank</p>
      </div>
    </div>

    {/* Value card */}
    <div style={{ margin: "-18px 18px 0", position: "relative", zIndex: 2 }}>
      <div style={{ background: T.white, borderRadius: 14, padding: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: `1px solid ${T.g100}` }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: T.purple, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Your Potential Impact</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {[{ val: "$47,500", label: "Est. donation value", icon: "💰" }, { val: "3", label: "Active donors nearby", icon: "🏢" }, { val: "12", label: "Pallets this month", icon: "📦" }, { val: "850+", label: "Families served", icon: "❤️" }].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: T.purpleLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: T.g900 }}>{s.val}</div>
                <div style={{ fontSize: 9, color: T.g500, lineHeight: 1.3 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Checklist */}
    <div style={{ padding: "16px 20px 6px" }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.g800, marginBottom: 2 }}>Get started in 5 minutes</div>
      <div style={{ fontSize: 11, color: T.g500, marginBottom: 8 }}>Complete setup to start receiving donations</div>
      <Chk done label="Intro call with Simpli team" />
      <Chk done label="Basic organization info collected" />
      <Chk label="Upload verification documents" />
      <Chk label="Confirm distribution center" />
    </div>

    {/* CTA */}
    <div style={{ padding: "6px 20px 0" }}>
      <Btn primary full>Continue Setup →</Btn>
      <div style={{ textAlign: "center", fontSize: 10, color: T.g400, marginTop: 6 }}>Average completion: 5 minutes</div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   SCREEN 2: DOCUMENT UPLOAD (1 frame)
   ═══════════════════════════════════════════════════════════════ */
const S2 = () => (
  <div style={{ background: T.white, height: PHONE_H - 16 }}>
    <NavHeader title="Verify Organization" back />

    {/* Progress */}
    <div style={{ padding: "14px 20px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, marginBottom: 6 }}>
        <span style={{ fontWeight: 600, color: T.purple }}>Step 1 of 3</span>
        <span style={{ color: T.g400 }}>33%</span>
      </div>
      <Bar pct={33} color="grad" />
    </div>

    {/* Content */}
    <div style={{ padding: "16px 20px" }}>
      <h2 style={{ fontSize: 17, fontWeight: 700, color: T.g900, margin: "0 0 4px", fontFamily: font }}>Upload Documents</h2>
      <p style={{ fontSize: 12, color: T.g500, margin: "0 0 16px", lineHeight: 1.5, fontFamily: font }}>We need a few documents to verify your org. This unlocks premium corporate donations.</p>

      {[
        { name: "IRS 990 Form", desc: "Most recent annual filing", req: true, icon: "📋" },
        { name: "Certificate of Insurance", desc: "General liability COI", req: true, icon: "🛡️" },
        { name: "W-9 Form", desc: "Tax identification", req: false, icon: "📄" },
      ].map((doc, i) => (
        <div key={i} style={{
          border: `1.5px dashed ${doc.req ? T.purple + "44" : T.g300}`,
          borderRadius: 12, padding: 14, marginBottom: 10,
          display: "flex", alignItems: "center", gap: 12,
          background: doc.req ? T.purpleLt + "40" : T.g50,
        }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: T.white, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}>{doc.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.g800 }}>{doc.name}</div>
            <div style={{ fontSize: 10, color: T.g500 }}>{doc.desc}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5 }}>
            <Badge text={doc.req ? "Required" : "Optional"} v={doc.req ? "orange" : "blue"} />
            <span style={{ fontSize: 11, color: T.purple, fontWeight: 600 }}>Upload ↑</span>
          </div>
        </div>
      ))}

      {/* Skip tip */}
      <div style={{ background: T.purpleLt, borderRadius: 10, padding: 12, display: "flex", gap: 8, marginTop: 6 }}>
        <span style={{ fontSize: 14, flexShrink: 0 }}>💡</span>
        <span style={{ fontSize: 11, color: T.purple, lineHeight: 1.5, fontWeight: 500 }}>Don't have these handy? Skip for now. You'll still see available donations.</span>
      </div>
    </div>

    {/* Bottom */}
    <div style={{ padding: "4px 20px 0", display: "flex", gap: 10 }}>
      <Btn outline>Skip for now</Btn>
      <div style={{ flex: 1 }}><Btn primary full>Continue →</Btn></div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   SCREEN 3A: DASHBOARD — TOP (header + alert + checklist)
   ═══════════════════════════════════════════════════════════════ */
const S3a = () => (
  <div style={{ background: T.g50, height: PHONE_H - 16 }}>
    <div style={{ background: T.gradHero, borderRadius: "0 0 24px 24px", paddingBottom: 20 }}>
      <StatusBar />
      <div style={{ padding: "0 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ color: T.white, fontSize: 17, fontWeight: 700, letterSpacing: -0.3 }}>simpli</span>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <span style={{ color: T.white, fontSize: 18 }}>🔔</span>
              <div style={{ position: "absolute", top: -2, right: -2, width: 8, height: 8, borderRadius: 4, background: T.orange, border: `2px solid ${T.purple}` }} />
            </div>
            <div style={{ width: 30, height: 30, borderRadius: 10, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: T.white, fontSize: 12, fontWeight: 700 }}>NF</div>
          </div>
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: T.white, marginBottom: 4 }}>Good morning,</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginBottom: 12 }}>Nashville Food Bank</div>
        <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 12, padding: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>Match Readiness</span>
            <span style={{ fontSize: 18, fontWeight: 800, color: T.white }}>72%</span>
          </div>
          <Bar pct={72} color={T.green} />
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", marginTop: 5 }}>2 more steps to be fully match-ready</div>
        </div>
      </div>
    </div>

    <div style={{ padding: "14px 16px 0" }}>
      {/* Alert card */}
      <div style={{ background: T.white, borderRadius: 14, padding: 14, marginBottom: 12, boxShadow: "0 2px 10px rgba(0,0,0,0.06)", border: `1px solid ${T.orange}33` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: T.orangeLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>⚡</div>
          <span style={{ fontSize: 13, fontWeight: 700, color: T.g900 }}>1 Donation Available</span>
          <Badge text="New" v="orange" />
        </div>
        <p style={{ fontSize: 11, color: T.g600, margin: "0 0 10px", lineHeight: 1.5, paddingLeft: 34 }}>Beauty & personal care company has 8 pallets in Nashville. Complete your profile to be eligible.</p>
        <div style={{ paddingLeft: 34 }}><Btn primary small>View Details →</Btn></div>
      </div>

      {/* Checklist card */}
      <div style={{ background: T.white, borderRadius: 14, padding: 14, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: T.g800, marginBottom: 6 }}>Complete Your Profile</div>
        <Chk done label="Organization verified" />
        <Chk done label="990 form uploaded" />
        <Chk done label="COI on file" />
        <Chk label="Pallet capacity confirmed" />
        <Chk label="Distribution center added" />
        <div style={{ marginTop: 8 }}><Btn primary small>Complete Next Step</Btn></div>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   SCREEN 3B: DASHBOARD — BOTTOM (impact stats + nearby + nav)
   ═══════════════════════════════════════════════════════════════ */
const S3b = () => (
  <div style={{ background: T.g50, height: PHONE_H - 16, position: "relative" }}>
    {/* Simplified top bar to show context */}
    <div style={{ background: T.gradHero, padding: "0 20px", height: 50, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <span style={{ color: T.white, fontSize: 15, fontWeight: 700 }}>simpli</span>
      <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: T.white, fontSize: 11, fontWeight: 700 }}>NF</div>
    </div>

    <div style={{ padding: "14px 16px", paddingBottom: 80 }}>
      {/* Impact stats */}
      <div style={{ background: T.white, borderRadius: 14, padding: 14, marginBottom: 12, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: T.g800, marginBottom: 10 }}>Your Simpli Impact</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div style={{ textAlign: "center", padding: 12, background: T.purpleLt, borderRadius: 12 }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: T.purple }}>$0</div>
            <div style={{ fontSize: 10, color: T.g500, fontWeight: 500, marginTop: 2 }}>Donations received</div>
          </div>
          <div style={{ textAlign: "center", padding: 12, background: T.greenLt, borderRadius: 12 }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: T.green }}>0</div>
            <div style={{ fontSize: 10, color: T.g500, fontWeight: 500, marginTop: 2 }}>Pallets accepted</div>
          </div>
        </div>
        <div style={{ fontSize: 10, color: T.g400, textAlign: "center", marginTop: 8, fontStyle: "italic" }}>Complete your profile to receive your first match</div>
      </div>

      {/* Nearby activity */}
      <div style={{ background: T.white, borderRadius: 14, padding: 14, marginBottom: 12, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: T.g800, marginBottom: 8 }}>Activity Near You</div>
        {[
          { charity: "Second Harvest", amt: "$12,400", when: "2 days ago" },
          { charity: "Room in the Inn", amt: "$8,200", when: "1 week ago" },
          { charity: "Nashville Rescue Mission", amt: "$23,100", when: "2 weeks ago" },
        ].map((a, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: i < 2 ? `1px solid ${T.g100}` : "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: T.greenLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: T.green }}>{a.charity[0]}</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: T.g700 }}>{a.charity}</div>
                <div style={{ fontSize: 10, color: T.g400 }}>{a.when}</div>
              </div>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: T.green }}>{a.amt}</span>
          </div>
        ))}
      </div>

      {/* Quick action */}
      <div style={{ background: T.white, borderRadius: 14, padding: 14, boxShadow: "0 2px 10px rgba(0,0,0,0.04)", textAlign: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: T.g800, marginBottom: 4 }}>Explore Donation Catalog</div>
        <div style={{ fontSize: 11, color: T.g500, marginBottom: 10, lineHeight: 1.4 }}>See what types of donations are available in your region</div>
        <Btn primary small>Browse Catalog →</Btn>
      </div>
    </div>

    <BottomNav active={0} />
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   SCREEN 4A: DONATION MATCH — TOP (celebration + donation details)
   ═══════════════════════════════════════════════════════════════ */
const S4a = () => (
  <div style={{ background: T.white, height: PHONE_H - 16 }}>
    <NavHeader title="Donation Match" back />

    {/* Celebration */}
    <div style={{ background: T.gradHero, padding: "20px 20px 24px", textAlign: "center" }}>
      <div style={{ fontSize: 36 }}>🎉</div>
      <div style={{ fontSize: 20, fontWeight: 800, color: T.white, marginTop: 4 }}>You've Been Matched!</div>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 6 }}>A donation is ready for your organization</div>
    </div>

    {/* Donation card */}
    <div style={{ padding: "0 20px" }}>
      <div style={{ background: T.white, borderRadius: 16, padding: 18, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: `1px solid ${T.g100}`, marginTop: -16, position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.g400, textTransform: "uppercase", letterSpacing: 1 }}>Donor</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: T.g900, marginTop: 3 }}>Fortune 500 Beauty Brand</div>
          </div>
          <Badge text="New Match" v="green" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[
            { l: "Estimated Value", v: "$23,400", big: true },
            { l: "Pallets", v: "8", big: true },
            { l: "Category", v: "Personal Care" },
            { l: "Delivery Window", v: "May 1 to May 15" },
          ].map((d, i) => (
            <div key={i}>
              <div style={{ fontSize: 9, fontWeight: 700, color: T.g400, textTransform: "uppercase", letterSpacing: 0.5 }}>{d.l}</div>
              <div style={{ fontSize: d.big ? 20 : 13, fontWeight: d.big ? 800 : 600, color: T.g900, marginTop: 3 }}>{d.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Intro to form */}
    <div style={{ padding: "20px 20px 0" }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.g800, marginBottom: 14 }}>Confirm to accept:</div>

      {/* Delivery address */}
      <div style={{ border: `1.5px solid ${T.purple}33`, borderRadius: 14, padding: 14, marginBottom: 12, background: T.purpleLt + "30" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 15 }}>📍</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: T.g800 }}>Delivery Address</span>
          <Badge text="Required" v="orange" />
        </div>
        <InputBox placeholder="Enter warehouse or facility address..." icon="🏢" />
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   SCREEN 4B: DONATION MATCH — BOTTOM (capacity + contact + CTAs)
   ═══════════════════════════════════════════════════════════════ */
const S4b = () => (
  <div style={{ background: T.white, height: PHONE_H - 16 }}>
    {/* Context header */}
    <div style={{ background: T.gradHero, padding: "0 16px", height: 50, display: "flex", alignItems: "center" }}>
      <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 22, fontWeight: 300, lineHeight: 1 }}>‹</span>
      <span style={{ flex: 1, textAlign: "center", color: T.white, fontSize: 15, fontWeight: 600 }}>Donation Match</span>
      <span style={{ width: 24 }} />
    </div>

    <div style={{ padding: "16px 20px" }}>
      {/* Delivery address (filled state) */}
      <div style={{ border: `1.5px solid ${T.green}66`, borderRadius: 14, padding: 14, marginBottom: 12, background: T.greenLt + "40" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span style={{ fontSize: 15 }}>📍</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: T.g800 }}>Delivery Address</span>
          <Badge text="Done" v="green" />
        </div>
        <div style={{ background: T.g50, border: `1.5px solid ${T.g200}`, borderRadius: 10, padding: "10px 14px", fontSize: 13, color: T.g800 }}>
          123 Warehouse Blvd, Nashville, TN 37203
        </div>
      </div>

      {/* Capacity */}
      <div style={{ border: `1.5px solid ${T.g200}`, borderRadius: 14, padding: 14, marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 15 }}>📦</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: T.g800 }}>Pallet Capacity</span>
        </div>
        <div style={{ fontSize: 12, color: T.g500, marginBottom: 10 }}>Can you receive 8 pallets within the delivery window?</div>
        <div style={{ display: "flex", gap: 8 }}>
          <Btn primary small>Yes, 8 pallets</Btn>
          <Btn outline small>Request fewer</Btn>
        </div>
      </div>

      {/* Contact */}
      <div style={{ border: `1.5px solid ${T.g200}`, borderRadius: 14, padding: 14, marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 15 }}>👤</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: T.g800 }}>Receiving Contact</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <InputBox placeholder="Contact name" icon="✏️" />
          <InputBox placeholder="Phone number" icon="📱" />
        </div>
      </div>

      {/* Info */}
      <div style={{ background: T.purpleLt, borderRadius: 10, padding: 12, display: "flex", gap: 8 }}>
        <span style={{ fontSize: 14, flexShrink: 0 }}>💡</span>
        <span style={{ fontSize: 11, color: T.purple, lineHeight: 1.5, fontWeight: 500 }}>You can update delivery details up to 48 hours before the delivery window opens.</span>
      </div>
    </div>

    {/* Accept / Decline */}
    <div style={{ padding: "12px 20px", display: "flex", gap: 10, position: "absolute", bottom: 28, left: 0, right: 0 }}>
      <Btn outline>Decline</Btn>
      <div style={{ flex: 1 }}><Btn primary full>Accept Donation →</Btn></div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   SCREEN 5A: IMPACT REPORT — TOP (hero stat + breakdown)
   ═══════════════════════════════════════════════════════════════ */
const S5a = () => (
  <div style={{ background: T.g50, height: PHONE_H - 16 }}>
    <div style={{ background: T.gradHero, borderRadius: "0 0 24px 24px" }}>
      <StatusBar />
      <div style={{ padding: "0 20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: T.white, fontSize: 17, fontWeight: 700 }}>Impact Report</span>
        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontWeight: 500 }}>Share ↗</span>
      </div>
    </div>

    <div style={{ padding: "0 16px", marginTop: -10 }}>
      {/* Hero stat */}
      <div style={{ background: T.white, borderRadius: 18, padding: 22, textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", marginBottom: 14 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: T.g400, textTransform: "uppercase", letterSpacing: 1 }}>Your Total Impact</div>
        <div style={{ fontSize: 40, fontWeight: 900, background: T.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginTop: 4 }}>$23,400</div>
        <div style={{ fontSize: 12, color: T.g500, marginTop: 2 }}>in donated goods received</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 18 }}>
          {[{ val: "8", label: "Pallets", color: T.purple }, { val: "1,200", label: "People Served", color: T.green }, { val: "4.2t", label: "Waste Diverted", color: T.blue }].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.val}</div>
              <div style={{ fontSize: 10, color: T.g500, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Donation timeline */}
      <div style={{ background: T.white, borderRadius: 14, padding: 14, marginBottom: 14, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: T.g800, marginBottom: 10 }}>Donation History</div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: `1px solid ${T.g100}` }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: T.purpleLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>💜</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.g800 }}>Fortune 500 Beauty Brand</div>
            <div style={{ fontSize: 10, color: T.g400 }}>8 pallets • Personal Care • May 3, 2026</div>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: T.green }}>$23,400</div>
        </div>
        <div style={{ textAlign: "center", padding: "10px 0", fontSize: 11, color: T.purple, fontWeight: 600 }}>First donation received! 🎉</div>
      </div>

      {/* Environmental impact */}
      <div style={{ background: T.white, borderRadius: 14, padding: 14, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: T.g800, marginBottom: 10 }}>Environmental Impact</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div style={{ textAlign: "center", padding: 10, background: T.greenLt, borderRadius: 10 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: T.greenDk }}>4.2</div>
            <div style={{ fontSize: 9, color: T.g500 }}>Tons diverted from landfill</div>
          </div>
          <div style={{ textAlign: "center", padding: 10, background: T.blueLt, borderRadius: 10 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: T.blue }}>2.8</div>
            <div style={{ fontSize: 9, color: T.g500 }}>MTCO₂e prevented</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   SCREEN 5B: IMPACT REPORT — BOTTOM (photo upload + retention)
   ═══════════════════════════════════════════════════════════════ */
const S5b = () => (
  <div style={{ background: T.g50, height: PHONE_H - 16, position: "relative" }}>
    {/* Context header */}
    <div style={{ background: T.gradHero, padding: "0 20px", height: 50, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <span style={{ color: T.white, fontSize: 15, fontWeight: 700 }}>Impact Report</span>
      <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontWeight: 500 }}>Share ↗</span>
    </div>

    <div style={{ padding: "14px 16px", paddingBottom: 80 }}>
      {/* Photo upload */}
      <div style={{ background: T.white, borderRadius: 14, padding: 14, marginBottom: 14, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: T.g800, marginBottom: 4 }}>Share Your Impact</div>
        <div style={{ fontSize: 11, color: T.g500, marginBottom: 12, lineHeight: 1.5 }}>Upload photos from your distribution. Donors love seeing the impact of their contributions.</div>
        <div style={{ border: `2px dashed ${T.purple}33`, borderRadius: 14, padding: 22, textAlign: "center", background: T.purpleLt + "40" }}>
          <div style={{ fontSize: 28 }}>📸</div>
          <div style={{ fontSize: 13, color: T.purple, fontWeight: 600, marginTop: 6 }}>Tap to upload photos</div>
          <div style={{ fontSize: 10, color: T.g400, marginTop: 4 }}>JPG, PNG up to 10MB</div>
        </div>
      </div>

      {/* Thank you letter */}
      <div style={{ background: T.white, borderRadius: 14, padding: 14, marginBottom: 14, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: T.g800, marginBottom: 4 }}>Thank You Letter</div>
        <div style={{ fontSize: 11, color: T.g500, marginBottom: 10, lineHeight: 1.5 }}>Send a personalized thank you to your donor. This strengthens the relationship for future donations.</div>
        <Btn primary small>Create Thank You Letter</Btn>
      </div>

      {/* Retention CTA */}
      <div style={{ background: T.white, borderRadius: 14, padding: 18, textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.04)", border: `1px solid ${T.green}33` }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: T.greenLt, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", fontSize: 20 }}>🎯</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: T.g800 }}>Ready for more?</div>
        <div style={{ fontSize: 11, color: T.g500, marginTop: 4, marginBottom: 12, lineHeight: 1.5 }}>2 more donations available in Nashville. Keep your profile updated to stay eligible.</div>
        <Btn primary>Browse Available Donations</Btn>
      </div>
    </div>

    <BottomNav active={2} />
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   MAIN: FIGMA-STYLE CANVAS WITH ALL FRAMES
   ═══════════════════════════════════════════════════════════════ */
export default function SimpliMockup() {
  const [view, setView] = useState("all"); // "all" or screen index

  const groups = [
    { title: "Screen 1", phase: "Phase 1 → 2", frames: [
      { label: "Post-Call Landing", sublabel: "Value-first welcome", el: <S1 /> },
    ]},
    { title: "Screen 2", phase: "Phase 2", frames: [
      { label: "Document Upload", sublabel: "Simplified verification", el: <S2 /> },
    ]},
    { title: "Screen 3", phase: "Engagement Layer", frames: [
      { label: "Dashboard — Top", sublabel: "Alert + checklist", el: <S3a /> },
      { label: "Dashboard — Scrolled", sublabel: "Impact + nearby activity", el: <S3b /> },
    ]},
    { title: "Screen 4", phase: "Phase 3", frames: [
      { label: "Donation Match — Top", sublabel: "Celebration + details", el: <S4a /> },
      { label: "Donation Match — Scrolled", sublabel: "Capacity + contact + CTA", el: <S4b /> },
    ]},
    { title: "Screen 5", phase: "Retention", frames: [
      { label: "Impact Report — Top", sublabel: "Hero stats + history", el: <S5a /> },
      { label: "Impact Report — Scrolled", sublabel: "Photos + retention CTA", el: <S5b /> },
    ]},
  ];

  return (
    <div style={{ minHeight: "100vh", background: T.canvas, fontFamily: font }}>
      {/* Figma-style top bar */}
      <div style={{ background: T.bar, borderBottom: `1px solid ${T.border}`, padding: "10px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: T.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: T.white, fontWeight: 700 }}>S</div>
            <span style={{ fontWeight: 700, fontSize: 14, color: T.white }}>Simpli</span>
          </div>
          <span style={{ color: T.border }}>|</span>
          <span style={{ fontSize: 12, color: T.g500 }}>Charity Activation Layer — High Fidelity Mockup</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Badge text="Product Space x Simpli" v="purple" />
          <span style={{ fontSize: 11, color: T.g500 }}>April 2026</span>
        </div>
      </div>

      {/* View filter */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, padding: "16px 24px 8px", flexWrap: "wrap" }}>
        <button onClick={() => setView("all")} style={{
          padding: "8px 16px", borderRadius: 8, fontFamily: font,
          border: view === "all" ? `2px solid ${T.purple}` : `1px solid ${T.border}`,
          background: view === "all" ? T.purple + "22" : T.bar,
          color: view === "all" ? "#C084FC" : T.g500,
          fontSize: 12, fontWeight: view === "all" ? 700 : 500, cursor: "pointer",
        }}>All Screens (8 frames)</button>
        {groups.map((g, i) => (
          <button key={i} onClick={() => setView(i)} style={{
            padding: "8px 16px", borderRadius: 8, fontFamily: font,
            border: view === i ? `2px solid ${T.purple}` : `1px solid ${T.border}`,
            background: view === i ? T.purple + "22" : T.bar,
            color: view === i ? "#C084FC" : T.g500,
            fontSize: 12, fontWeight: view === i ? 700 : 500, cursor: "pointer",
          }}>{g.title}</button>
        ))}
      </div>

      {/* Flow indicator */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "10px 0 6px" }}>
        {groups.map((g, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div onClick={() => setView(i)} style={{
              padding: "4px 12px", borderRadius: 6,
              background: (view === "all" || view === i) ? T.grad : T.bar,
              border: (view === "all" || view === i) ? "none" : `1px solid ${T.border}`,
              color: (view === "all" || view === i) ? T.white : T.g500,
              fontSize: 10, fontWeight: 700, cursor: "pointer",
            }}>{g.phase}</div>
            {i < groups.length - 1 && <div style={{ width: 24, height: 2, background: T.border }} />}
          </div>
        ))}
      </div>

      {/* Artboard canvas */}
      <div style={{ padding: "20px 40px 60px", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: 32, justifyContent: view === "all" ? "flex-start" : "center", minWidth: view === "all" ? "max-content" : "auto" }}>
          {groups.map((group, gi) => {
            if (view !== "all" && view !== gi) return null;
            return (
              <div key={gi} style={{ display: "flex", gap: 24 }}>
                {/* Group separator label */}
                {view === "all" && gi > 0 && (
                  <div style={{ display: "flex", alignItems: "center", padding: "0 4px" }}>
                    <div style={{ width: 2, height: 120, background: T.border, borderRadius: 1 }} />
                  </div>
                )}
                {group.frames.map((frame, fi) => (
                  <Phone key={fi} label={frame.label} sublabel={frame.sublabel}>
                    {frame.el}
                  </Phone>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
