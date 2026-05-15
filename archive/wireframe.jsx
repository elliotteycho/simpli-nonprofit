import { useState } from "react";

const colors = {
  bg: "#1E1E1E",
  artboard: "#FFFFFF",
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#1F2937",
  blue: "#007FFF",
  blueLt: "#E8F4FF",
  green: "#10B981",
  greenLt: "#ECFDF5",
  orange: "#F59E0B",
  orangeLt: "#FFFBEB",
  purple: "#6B2D8B",
  purpleLt: "#F3E8FF",
  red: "#EF4444",
};

const Badge = ({ text, color = "blue" }) => {
  const map = {
    blue: { bg: colors.blueLt, fg: colors.blue },
    green: { bg: colors.greenLt, fg: colors.green },
    orange: { bg: colors.orangeLt, fg: colors.orange },
    purple: { bg: colors.purpleLt, fg: colors.purple },
  };
  const c = map[color] || map.blue;
  return (
    <span style={{ background: c.bg, color: c.fg, fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 99, letterSpacing: 0.5, textTransform: "uppercase" }}>
      {text}
    </span>
  );
};

const ProgressBar = ({ pct, color = colors.blue }) => (
  <div style={{ width: "100%", height: 6, background: colors.gray200, borderRadius: 3 }}>
    <div style={{ width: `${pct}%`, height: 6, background: color, borderRadius: 3, transition: "width 0.5s" }} />
  </div>
);

const CheckItem = ({ done, label }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
    <div style={{
      width: 18, height: 18, borderRadius: 4,
      background: done ? colors.green : "white",
      border: done ? "none" : `2px solid ${colors.gray300}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 11, color: "white", fontWeight: 700
    }}>
      {done && "✓"}
    </div>
    <span style={{ fontSize: 13, color: done ? colors.gray500 : colors.gray800, textDecoration: done ? "line-through" : "none" }}>{label}</span>
  </div>
);

const Btn = ({ children, primary, small, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      padding: small ? "6px 14px" : "10px 20px",
      fontSize: small ? 12 : 14,
      fontWeight: 600,
      border: primary ? "none" : `1.5px solid ${colors.gray300}`,
      borderRadius: 8,
      background: disabled ? colors.gray200 : primary ? colors.blue : "white",
      color: disabled ? colors.gray400 : primary ? "white" : colors.gray700,
      cursor: disabled ? "not-allowed" : "pointer",
    }}
  >
    {children}
  </button>
);

const Annotation = ({ text, side = "right" }) => (
  <div style={{
    position: "absolute",
    [side]: -180,
    top: "50%",
    transform: "translateY(-50%)",
    background: "#FFF3CD",
    border: "1px solid #FBBF24",
    borderRadius: 6,
    padding: "6px 10px",
    fontSize: 10,
    color: "#92400E",
    width: 160,
    lineHeight: 1.4,
    zIndex: 10,
  }}>
    {text}
  </div>
);

/* ─── SCREEN 1: POST-INTRO-CALL LANDING ─── */
const Screen1_Landing = () => (
  <div style={{ width: 375, background: colors.artboard, borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.15)", position: "relative" }}>
    {/* Status bar */}
    <div style={{ height: 44, background: colors.blue, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ color: "white", fontSize: 15, fontWeight: 600, letterSpacing: 0.3 }}>Simpli</span>
    </div>

    {/* Hero */}
    <div style={{ padding: "24px 20px 16px", textAlign: "center" }}>
      <div style={{ width: 56, height: 56, borderRadius: 28, background: colors.blueLt, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 24 }}>📦</div>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: colors.gray800, margin: "0 0 8px" }}>Welcome to Simpli, Nashville Food Bank</h2>
      <p style={{ fontSize: 13, color: colors.gray500, margin: 0, lineHeight: 1.5 }}>You're pre-approved to receive donated goods from Fortune 500 companies. Here's what's waiting for you.</p>
    </div>

    {/* Value-first stats */}
    <div style={{ margin: "0 20px", padding: 16, background: colors.greenLt, borderRadius: 10, border: `1px solid ${colors.green}33` }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: colors.green, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>Your Potential Impact</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, color: colors.gray800 }}>$47,500</div>
          <div style={{ fontSize: 11, color: colors.gray500 }}>Est. donation value in your area</div>
        </div>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, color: colors.gray800 }}>3</div>
          <div style={{ fontSize: 11, color: colors.gray500 }}>Active donors near you</div>
        </div>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, color: colors.gray800 }}>12</div>
          <div style={{ fontSize: 11, color: colors.gray500 }}>Pallets available this month</div>
        </div>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, color: colors.gray800 }}>850+</div>
          <div style={{ fontSize: 11, color: colors.gray500 }}>Families you could serve</div>
        </div>
      </div>
    </div>

    {/* What you need to do */}
    <div style={{ padding: "20px 20px 8px" }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: colors.gray800, marginBottom: 12 }}>Complete setup to start receiving (est. 5 min)</div>
      <CheckItem done={true} label="Intro call with Simpli team" />
      <CheckItem done={true} label="Basic organization info (from call)" />
      <CheckItem done={false} label="Upload verification documents" />
      <CheckItem done={false} label="Confirm warehouse details" />
    </div>

    {/* CTA */}
    <div style={{ padding: "12px 20px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
      <Btn primary>Continue Setup →</Btn>
      <div style={{ textAlign: "center", fontSize: 11, color: colors.gray400 }}>Takes about 5 minutes</div>
    </div>
  </div>
);

/* ─── SCREEN 2: SIMPLIFIED ONBOARDING (PHASE 2) ─── */
const Screen2_Onboarding = () => (
  <div style={{ width: 375, background: colors.artboard, borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}>
    <div style={{ height: 44, background: colors.blue, display: "flex", alignItems: "center", padding: "0 16px" }}>
      <span style={{ color: "white", fontSize: 14 }}>← Back</span>
      <span style={{ color: "white", fontSize: 15, fontWeight: 600, flex: 1, textAlign: "center" }}>Verify Your Organization</span>
      <span style={{ width: 40 }}></span>
    </div>

    {/* Progress */}
    <div style={{ padding: "16px 20px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: colors.gray500, marginBottom: 6 }}>
        <span>Step 1 of 3</span>
        <span>33% complete</span>
      </div>
      <ProgressBar pct={33} />
    </div>

    {/* Form */}
    <div style={{ padding: "20px" }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: colors.gray800, marginBottom: 4 }}>Upload Documents</div>
      <p style={{ fontSize: 12, color: colors.gray500, margin: "0 0 16px", lineHeight: 1.5 }}>We need a few documents to verify your organization. This unlocks access to premium corporate donations.</p>

      {/* Doc upload boxes */}
      {[
        { name: "IRS 990 Form", desc: "Most recent filing", status: "required" },
        { name: "Certificate of Insurance", desc: "General liability COI", status: "required" },
        { name: "W-9 Form", desc: "Tax identification", status: "optional" },
      ].map((doc, i) => (
        <div key={i} style={{
          border: `1.5px dashed ${colors.gray300}`,
          borderRadius: 10,
          padding: 14,
          marginBottom: 10,
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: colors.gray50,
        }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: colors.blueLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>📄</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: colors.gray800 }}>{doc.name}</div>
            <div style={{ fontSize: 11, color: colors.gray500 }}>{doc.desc}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
            <Badge text={doc.status} color={doc.status === "required" ? "orange" : "blue"} />
            <span style={{ fontSize: 11, color: colors.blue, fontWeight: 500 }}>Upload</span>
          </div>
        </div>
      ))}

      {/* Info note */}
      <div style={{ background: colors.blueLt, borderRadius: 8, padding: 12, marginTop: 12, display: "flex", gap: 8 }}>
        <span style={{ fontSize: 14 }}>💡</span>
        <span style={{ fontSize: 11, color: colors.blue, lineHeight: 1.5 }}>
          Don't have these handy? You can skip for now and upload later. You'll still see available donations in your area.
        </span>
      </div>
    </div>

    {/* Bottom CTA */}
    <div style={{ padding: "0 20px 24px", display: "flex", gap: 10 }}>
      <Btn>Skip for now</Btn>
      <div style={{ flex: 1 }}>
        <Btn primary>Continue →</Btn>
      </div>
    </div>
  </div>
);

/* ─── SCREEN 3: ACTIVATION DASHBOARD ─── */
const Screen3_Dashboard = () => (
  <div style={{ width: 375, background: colors.gray50, borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}>
    <div style={{ height: 44, background: colors.blue, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px" }}>
      <span style={{ color: "white", fontSize: 15, fontWeight: 600 }}>Simpli</span>
      <div style={{ display: "flex", gap: 12 }}>
        <span style={{ color: "white", fontSize: 16 }}>🔔</span>
        <div style={{ width: 28, height: 28, borderRadius: 14, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 12, fontWeight: 600 }}>NF</div>
      </div>
    </div>

    <div style={{ padding: 16, overflowY: "auto" }}>
      {/* Greeting */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: colors.gray800 }}>Good morning, Nashville Food Bank</div>
        <div style={{ fontSize: 12, color: colors.gray500 }}>Your match readiness: 72%</div>
        <div style={{ marginTop: 6 }}><ProgressBar pct={72} color={colors.green} /></div>
      </div>

      {/* Alert card */}
      <div style={{ background: colors.orangeLt, border: `1px solid ${colors.orange}44`, borderRadius: 10, padding: 14, marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <span style={{ fontSize: 14 }}>⚡</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: colors.gray800 }}>1 Donation Available Near You</span>
        </div>
        <div style={{ fontSize: 12, color: colors.gray600, lineHeight: 1.5 }}>
          A beauty & personal care company has 8 pallets of product looking for a home in the Nashville area. Complete your profile to be eligible.
        </div>
        <div style={{ marginTop: 10 }}>
          <Btn primary small>View Details →</Btn>
        </div>
      </div>

      {/* Match readiness */}
      <div style={{ background: "white", borderRadius: 10, padding: 14, marginBottom: 14, border: `1px solid ${colors.gray200}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: colors.gray800, marginBottom: 10 }}>Match Readiness</div>
        <CheckItem done={true} label="Organization verified" />
        <CheckItem done={true} label="990 form uploaded" />
        <CheckItem done={true} label="COI on file" />
        <CheckItem done={false} label="Pallet capacity confirmed" />
        <CheckItem done={false} label="Distribution center added" />
        <div style={{ marginTop: 8 }}>
          <Btn small primary>Complete next step</Btn>
        </div>
      </div>

      {/* Impact stats */}
      <div style={{ background: "white", borderRadius: 10, padding: 14, marginBottom: 14, border: `1px solid ${colors.gray200}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: colors.gray800, marginBottom: 10 }}>Your Simpli Impact</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div style={{ textAlign: "center", padding: 8, background: colors.gray50, borderRadius: 8 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: colors.blue }}>$0</div>
            <div style={{ fontSize: 10, color: colors.gray500 }}>Donations received</div>
          </div>
          <div style={{ textAlign: "center", padding: 8, background: colors.gray50, borderRadius: 8 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: colors.green }}>0</div>
            <div style={{ fontSize: 10, color: colors.gray500 }}>Pallets accepted</div>
          </div>
        </div>
        <div style={{ fontSize: 11, color: colors.gray400, textAlign: "center", marginTop: 8 }}>Complete your profile to receive your first match</div>
      </div>

      {/* Nearby activity */}
      <div style={{ background: "white", borderRadius: 10, padding: 14, marginBottom: 14, border: `1px solid ${colors.gray200}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: colors.gray800, marginBottom: 10 }}>Activity in Your Area</div>
        {[
          { charity: "Second Harvest", amt: "$12,400", when: "2 days ago" },
          { charity: "Room in the Inn", amt: "$8,200", when: "1 week ago" },
          { charity: "Nashville Rescue Mission", amt: "$23,100", when: "2 weeks ago" },
        ].map((a, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: i < 2 ? `1px solid ${colors.gray100}` : "none" }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 500, color: colors.gray700 }}>{a.charity}</div>
              <div style={{ fontSize: 10, color: colors.gray400 }}>{a.when}</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: colors.green }}>{a.amt}</div>
          </div>
        ))}
      </div>

      {/* Explore donation catalog */}
      <div style={{ background: "white", borderRadius: 10, padding: 14, border: `1px solid ${colors.gray200}`, textAlign: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: colors.gray800, marginBottom: 4 }}>Explore Donation Catalog</div>
        <div style={{ fontSize: 11, color: colors.gray500, marginBottom: 10, lineHeight: 1.4 }}>See what types of donations are available in your region</div>
        <Btn primary small>Browse Catalog →</Btn>
      </div>
    </div>

    {/* Bottom nav */}
    <div style={{ display: "flex", borderTop: `1px solid ${colors.gray200}`, background: "white" }}>
      {["🏠 Home", "📦 Matches", "📊 Impact", "⚙️ Settings"].map((tab, i) => (
        <div key={i} style={{ flex: 1, textAlign: "center", padding: "10px 0", fontSize: 10, color: i === 0 ? colors.blue : colors.gray400, fontWeight: i === 0 ? 600 : 400 }}>
          {tab}
        </div>
      ))}
    </div>
  </div>
);

/* ─── SCREEN 4: DONATION MATCH (PHASE 3) ─── */
const Screen4_Match = () => (
  <div style={{ width: 375, background: colors.artboard, borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}>
    <div style={{ height: 44, background: colors.blue, display: "flex", alignItems: "center", padding: "0 16px" }}>
      <span style={{ color: "white", fontSize: 14 }}>← Back</span>
      <span style={{ color: "white", fontSize: 15, fontWeight: 600, flex: 1, textAlign: "center" }}>Donation Match</span>
      <span style={{ width: 40 }}></span>
    </div>

    {/* Match banner */}
    <div style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.purple})`, padding: "20px", textAlign: "center" }}>
      <div style={{ fontSize: 28 }}>🎉</div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "white", marginTop: 4 }}>You've Been Matched!</div>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>A donation is available for your organization</div>
    </div>

    {/* Donation details */}
    <div style={{ padding: "16px 20px" }}>
      <div style={{ background: colors.gray50, borderRadius: 10, padding: 16, border: `1px solid ${colors.gray200}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 11, color: colors.gray500, textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600 }}>Donor</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: colors.gray800, marginTop: 2 }}>Fortune 500 Beauty Brand</div>
          </div>
          <Badge text="New Match" color="green" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
          <div>
            <div style={{ fontSize: 10, color: colors.gray500, textTransform: "uppercase" }}>Estimated Value</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: colors.gray800 }}>$23,400</div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: colors.gray500, textTransform: "uppercase" }}>Pallets</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: colors.gray800 }}>8</div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: colors.gray500, textTransform: "uppercase" }}>Category</div>
            <div style={{ fontSize: 13, fontWeight: 500, color: colors.gray800 }}>Personal Care</div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: colors.gray500, textTransform: "uppercase" }}>Delivery Window</div>
            <div style={{ fontSize: 13, fontWeight: 500, color: colors.gray800 }}>May 1 to May 15</div>
          </div>
        </div>
      </div>

      {/* What's needed */}
      <div style={{ marginTop: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: colors.gray800, marginBottom: 10 }}>To accept this donation, confirm:</div>

        {/* Distribution center */}
        <div style={{ background: "white", border: `1.5px solid ${colors.orange}`, borderRadius: 10, padding: 14, marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span style={{ fontSize: 14 }}>📍</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: colors.gray800 }}>Delivery Address</span>
            <Badge text="Required" color="orange" />
          </div>
          <div style={{ marginLeft: 26 }}>
            <div style={{ fontSize: 12, color: colors.gray500, marginBottom: 8 }}>Where should the pallets be delivered?</div>
            <div style={{ background: colors.gray50, borderRadius: 6, padding: 10, border: `1px solid ${colors.gray200}`, fontSize: 12, color: colors.gray400 }}>
              Enter warehouse or facility address...
            </div>
          </div>
        </div>

        {/* Capacity confirm */}
        <div style={{ background: "white", border: `1.5px solid ${colors.gray200}`, borderRadius: 10, padding: 14, marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span style={{ fontSize: 14 }}>📦</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: colors.gray800 }}>Pallet Capacity</span>
          </div>
          <div style={{ marginLeft: 26, fontSize: 12, color: colors.gray500 }}>Can you receive 8 pallets within the delivery window?</div>
          <div style={{ marginLeft: 26, marginTop: 8, display: "flex", gap: 8 }}>
            <Btn small primary>Yes, we can receive 8</Btn>
            <Btn small>Request fewer</Btn>
          </div>
        </div>

        {/* Contact */}
        <div style={{ background: "white", border: `1.5px solid ${colors.gray200}`, borderRadius: 10, padding: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span style={{ fontSize: 14 }}>👤</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: colors.gray800 }}>Receiving Contact</span>
          </div>
          <div style={{ marginLeft: 26, fontSize: 12, color: colors.gray500, marginBottom: 8 }}>Who should the delivery team contact on arrival?</div>
          <div style={{ marginLeft: 26, display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ background: colors.gray50, borderRadius: 6, padding: 8, border: `1px solid ${colors.gray200}`, fontSize: 12, color: colors.gray400 }}>Contact name...</div>
            <div style={{ background: colors.gray50, borderRadius: 6, padding: 8, border: `1px solid ${colors.gray200}`, fontSize: 12, color: colors.gray400 }}>Phone number...</div>
          </div>
        </div>

        {/* Update tip */}
        <div style={{ background: colors.blueLt, borderRadius: 8, padding: 12, marginTop: 12, display: "flex", gap: 8 }}>
          <span style={{ fontSize: 14 }}>💡</span>
          <span style={{ fontSize: 11, color: colors.blue, lineHeight: 1.5 }}>
            You can update delivery details up to 48 hours before the delivery window opens.
          </span>
        </div>
      </div>
    </div>

    {/* Accept/Decline */}
    <div style={{ padding: "12px 20px 24px", display: "flex", gap: 10 }}>
      <Btn>Decline</Btn>
      <div style={{ flex: 1 }}><Btn primary>Accept Donation →</Btn></div>
    </div>
  </div>
);

/* ─── SCREEN 5: POST-DONATION IMPACT ─── */
const Screen5_Impact = () => (
  <div style={{ width: 375, background: colors.gray50, borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}>
    <div style={{ height: 44, background: colors.blue, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px" }}>
      <span style={{ color: "white", fontSize: 15, fontWeight: 600 }}>Impact Report</span>
      <span style={{ color: "white", fontSize: 12 }}>Share ↗</span>
    </div>

    <div style={{ padding: 16 }}>
      {/* Summary card */}
      <div style={{ background: "white", borderRadius: 12, padding: 20, textAlign: "center", marginBottom: 14, border: `1px solid ${colors.gray200}` }}>
        <div style={{ fontSize: 11, color: colors.gray500, textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600 }}>Your Total Impact</div>
        <div style={{ fontSize: 36, fontWeight: 800, color: colors.blue, marginTop: 4 }}>$23,400</div>
        <div style={{ fontSize: 12, color: colors.gray500, marginTop: 2 }}>in donated goods received</div>

        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 16 }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: colors.green }}>8</div>
            <div style={{ fontSize: 10, color: colors.gray500 }}>Pallets</div>
          </div>
          <div style={{ width: 1, background: colors.gray200 }} />
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: colors.green }}>1,200</div>
            <div style={{ fontSize: 10, color: colors.gray500 }}>People Served</div>
          </div>
          <div style={{ width: 1, background: colors.gray200 }} />
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: colors.green }}>4.2</div>
            <div style={{ fontSize: 10, color: colors.gray500 }}>Tons Diverted</div>
          </div>
        </div>
      </div>

      {/* Donation history */}
      <div style={{ background: "white", borderRadius: 10, padding: 14, marginBottom: 14, border: `1px solid ${colors.gray200}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: colors.gray800, marginBottom: 10 }}>Donation History</div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: `1px solid ${colors.gray100}` }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: colors.purpleLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>💜</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: colors.gray800 }}>Fortune 500 Beauty Brand</div>
            <div style={{ fontSize: 10, color: colors.gray400 }}>8 pallets · Personal Care · May 3, 2026</div>
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: colors.green }}>$23,400</div>
        </div>
        <div style={{ textAlign: "center", padding: "8px 0", fontSize: 11, color: colors.blue, fontWeight: 500 }}>First donation received! 🎉</div>
      </div>

      {/* Environmental impact */}
      <div style={{ background: "white", borderRadius: 10, padding: 14, marginBottom: 14, border: `1px solid ${colors.gray200}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: colors.gray800, marginBottom: 10 }}>Environmental Impact</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div style={{ textAlign: "center", padding: 8, background: colors.greenLt, borderRadius: 8 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: colors.green }}>4.2</div>
            <div style={{ fontSize: 10, color: colors.gray500 }}>Tons diverted from landfill</div>
          </div>
          <div style={{ textAlign: "center", padding: 8, background: colors.blueLt, borderRadius: 8 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: colors.blue }}>2.8</div>
            <div style={{ fontSize: 10, color: colors.gray500 }}>MTCO₂e prevented</div>
          </div>
        </div>
      </div>

      {/* Photo upload */}
      <div style={{ background: "white", borderRadius: 10, padding: 14, marginBottom: 14, border: `1px solid ${colors.gray200}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: colors.gray800, marginBottom: 6 }}>Share Your Impact</div>
        <div style={{ fontSize: 12, color: colors.gray500, marginBottom: 10, lineHeight: 1.5 }}>Upload photos from your distribution event. Your donors love seeing the impact of their contributions.</div>
        <div style={{
          border: `2px dashed ${colors.blue}44`,
          borderRadius: 10,
          padding: 20,
          textAlign: "center",
          background: colors.blueLt,
        }}>
          <div style={{ fontSize: 24 }}>📸</div>
          <div style={{ fontSize: 12, color: colors.blue, fontWeight: 500, marginTop: 4 }}>Tap to upload photos</div>
          <div style={{ fontSize: 10, color: colors.gray400, marginTop: 4 }}>JPG, PNG up to 10MB</div>
        </div>
      </div>

      {/* Thank you letter */}
      <div style={{ background: "white", borderRadius: 10, padding: 14, marginBottom: 14, border: `1px solid ${colors.gray200}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: colors.gray800, marginBottom: 4 }}>Thank You Letter</div>
        <div style={{ fontSize: 12, color: colors.gray500, marginBottom: 10, lineHeight: 1.5 }}>Send a personalized thank you to your donor. This strengthens the relationship for future donations.</div>
        <Btn primary small>Create Thank You Letter</Btn>
      </div>

      {/* Next donation CTA */}
      <div style={{ background: `linear-gradient(135deg, ${colors.green}15, ${colors.blue}15)`, borderRadius: 10, padding: 16, border: `1px solid ${colors.green}33`, textAlign: "center" }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: colors.gray800 }}>Ready for more?</div>
        <div style={{ fontSize: 12, color: colors.gray500, marginTop: 4, marginBottom: 12, lineHeight: 1.5 }}>
          2 more donations are available in the Nashville area. Keep your profile updated to stay eligible.
        </div>
        <Btn primary small>Browse Available Donations</Btn>
      </div>
    </div>
  </div>
);

/* ─── MAIN APP ─── */
export default function SimpliWireframe() {
  const [activeScreen, setActiveScreen] = useState(0);

  const screens = [
    { id: 0, label: "1. Post-Call Landing", phase: "Phase 1 → 2", desc: "Value-first welcome after intro call", component: <Screen1_Landing /> },
    { id: 1, label: "2. Doc Upload", phase: "Phase 2", desc: "Simplified verification (3 steps, not 8)", component: <Screen2_Onboarding /> },
    { id: 2, label: "3. Charity Dashboard", phase: "Between Phases", desc: "Activation hub with match readiness", component: <Screen3_Dashboard /> },
    { id: 3, label: "4. Donation Match", phase: "Phase 3", desc: "Just-in-time data collection at match", component: <Screen4_Match /> },
    { id: 4, label: "5. Impact Report", phase: "Post-Donation", desc: "Close the loop, drive retention", component: <Screen5_Impact /> },
  ];

  return (
    <div style={{ minHeight: "100vh", background: colors.bg, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Top bar */}
      <div style={{ background: "#2D2D2D", borderBottom: "1px solid #3D3D3D", padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ color: colors.blue, fontWeight: 700, fontSize: 14 }}>Simpli</span>
          <span style={{ color: colors.gray400, fontSize: 12 }}>Charity Activation Layer — Wireframe</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: colors.gray500, fontSize: 11 }}>Product Space x Simpli</span>
          <span style={{ color: colors.gray500, fontSize: 11 }}>|</span>
          <span style={{ color: colors.gray500, fontSize: 11 }}>April 2026</span>
        </div>
      </div>

      {/* Screen selector */}
      <div style={{ display: "flex", justifyContent: "center", gap: 4, padding: "16px 24px 8px", flexWrap: "wrap" }}>
        {screens.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveScreen(s.id)}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: activeScreen === s.id ? `2px solid ${colors.blue}` : "1px solid #3D3D3D",
              background: activeScreen === s.id ? `${colors.blue}22` : "#2D2D2D",
              color: activeScreen === s.id ? colors.blue : colors.gray400,
              fontSize: 12,
              fontWeight: activeScreen === s.id ? 600 : 400,
              cursor: "pointer",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Phase label */}
      <div style={{ textAlign: "center", padding: "8px 0" }}>
        <Badge text={screens[activeScreen].phase} color="purple" />
        <div style={{ color: colors.gray500, fontSize: 12, marginTop: 6 }}>{screens[activeScreen].desc}</div>
      </div>

      {/* Flow arrows */}
      <div style={{ display: "flex", justifyContent: "center", gap: 12, padding: "4px 0 12px" }}>
        {screens.map((_, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 24, height: 24, borderRadius: 12,
              background: i === activeScreen ? colors.blue : "#3D3D3D",
              color: i === activeScreen ? "white" : colors.gray500,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 600,
            }}>
              {i + 1}
            </div>
            {i < screens.length - 1 && <div style={{ width: 32, height: 1, background: "#3D3D3D" }} />}
          </div>
        ))}
      </div>

      {/* Main artboard */}
      <div style={{ display: "flex", justifyContent: "center", padding: "12px 24px 48px" }}>
        {screens[activeScreen].component}
      </div>

      {/* Design notes */}
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 24px 48px" }}>
        <div style={{ background: "#2D2D2D", borderRadius: 10, padding: 16 }}>
          <div style={{ color: colors.gray400, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Design Notes</div>
          {activeScreen === 0 && (
            <div style={{ color: colors.gray400, fontSize: 12, lineHeight: 1.6 }}>
              <strong style={{ color: colors.gray300 }}>Value-first principle:</strong> The charity sees estimated donation value, nearby donors, and available pallets BEFORE being asked to do anything. Stats are personalized based on data collected during the Phase 1 intro call. The checklist shows that steps from the call are already done, reducing perceived effort. "5 minutes" anchors a low time commitment.
            </div>
          )}
          {activeScreen === 1 && (
            <div style={{ color: colors.gray400, fontSize: 12, lineHeight: 1.6 }}>
              <strong style={{ color: colors.gray300 }}>Simplified from 8 steps to 3:</strong> Following Joseph's redesign direction, Phase 2 is document-focused only. Location, operating hours, and warehouse details have been moved to Phase 3 (donation match). The "skip for now" option reduces abandonment by letting charities see the dashboard even with incomplete docs, while the info note explains the benefit of completing.
            </div>
          )}
          {activeScreen === 2 && (
            <div style={{ color: colors.gray400, fontSize: 12, lineHeight: 1.6 }}>
              <strong style={{ color: colors.gray300 }}>Activation hub between phases:</strong> This is where charities live during the 90-day average order cycle. Match readiness percentage creates urgency. The "available near you" alert drives profile completion with a concrete incentive. Nearby activity (social proof) shows charities receiving real donations in their area.
            </div>
          )}
          {activeScreen === 3 && (
            <div style={{ color: colors.gray400, fontSize: 12, lineHeight: 1.6 }}>
              <strong style={{ color: colors.gray300 }}>Just-in-time data collection:</strong> Warehouse address, pallet capacity, and receiving contact are collected at the moment of maximum motivation — when a real donation is on the table. This replaces the old model of asking for this info during onboarding when the charity has no concrete reason to provide it. "Request fewer" option reduces all-or-nothing pressure.
            </div>
          )}
          {activeScreen === 4 && (
            <div style={{ color: colors.gray400, fontSize: 12, lineHeight: 1.6 }}>
              <strong style={{ color: colors.gray300 }}>Close the loop, drive retention:</strong> Impact stats give charities shareable proof of value. Photo upload feeds the Media Gallery (which already exists but isn't charity-facing). "2 more donations available" creates a pull-forward retention mechanism. The share button lets charities send impact data to their board/donors, reinforcing the Simpli relationship.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
