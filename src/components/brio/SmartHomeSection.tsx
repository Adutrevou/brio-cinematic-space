import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const features = [
  { icon: "◯", title: "Unified Control", description: "One interface for every system in your home." },
  { icon: "◇", title: "Fully Documented", description: "Complete system documentation and handover." },
  { icon: "△", title: "24/7 Monitoring", description: "Cloud-based monitoring and remote support." },
  { icon: "□", title: "Seamless Integration", description: "Technology designed into architecture, not added." },
];

type SystemKey = "lighting" | "hvac" | "security";

const systemInfo: Record<SystemKey, { label: string; color: string; description: string }> = {
  lighting: { label: "Lighting", color: "hsl(45, 80%, 65%)", description: "Scene-based lighting control across every room, tuned to time of day." },
  hvac: { label: "Climate", color: "hsl(200, 60%, 60%)", description: "Zoned climate management with predictive scheduling and energy optimization." },
  security: { label: "Security", color: "hsl(0, 60%, 60%)", description: "Perimeter detection, smart locks, and camera integration — all unified." },
};

const SmartHomeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSystem, setActiveSystem] = useState<SystemKey>("lighting");

  return (
    <section className="brio-section brio-dark" ref={ref}>
      <div className="brio-container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="brio-caption text-dark-surface-foreground/50 mb-16"
        >
          Technology
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text + feature cards */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="brio-heading-lg text-dark-surface-foreground mb-8"
            >
              Technology that disappears into architecture
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="brio-body text-dark-surface-foreground/60 max-w-md mb-12"
            >
              Lighting, climate, audio, security, cinema — every system unified under a single intelligent layer,
              designed from day one as part of your home's architecture.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  className="border-l border-dark-surface-foreground/10 pl-6"
                >
                  <span className="text-2xl text-dark-surface-foreground/30 block mb-4">{f.icon}</span>
                  <h4 className="font-serif text-lg text-dark-surface-foreground mb-2">{f.title}</h4>
                  <p className="font-sans text-sm text-dark-surface-foreground/50 font-light">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Interactive wireframe house */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* System toggles */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {(Object.keys(systemInfo) as SystemKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSystem(key)}
                  className={`brio-caption px-4 py-2 border transition-all duration-500 ${
                    activeSystem === key
                      ? "border-dark-surface-foreground/40 text-dark-surface-foreground"
                      : "border-dark-surface-foreground/10 text-dark-surface-foreground/30 hover:text-dark-surface-foreground/60"
                  }`}
                >
                  {systemInfo[key].label}
                </button>
              ))}
            </div>

            {/* Wireframe house SVG */}
            <div className="relative w-full max-w-md aspect-square">
              <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
                {/* House outline */}
                <motion.path
                  d="M60 220 L200 100 L340 220"
                  stroke="hsl(var(--dark-surface-foreground))"
                  strokeWidth="1"
                  strokeOpacity="0.25"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
                />
                <motion.rect
                  x="80" y="220" width="240" height="140"
                  stroke="hsl(var(--dark-surface-foreground))"
                  strokeWidth="1"
                  strokeOpacity="0.25"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                />
                {/* Floor divider */}
                <motion.line
                  x1="80" y1="290" x2="320" y2="290"
                  stroke="hsl(var(--dark-surface-foreground))"
                  strokeWidth="0.5"
                  strokeOpacity="0.15"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1.4 }}
                />
                {/* Room dividers */}
                <motion.line
                  x1="200" y1="220" x2="200" y2="360"
                  stroke="hsl(var(--dark-surface-foreground))"
                  strokeWidth="0.5"
                  strokeOpacity="0.15"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1.6 }}
                />
                {/* Window */}
                <motion.rect
                  x="120" y="240" width="30" height="30"
                  stroke="hsl(var(--dark-surface-foreground))"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.8 }}
                />
                <motion.rect
                  x="250" y="240" width="30" height="30"
                  stroke="hsl(var(--dark-surface-foreground))"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.9 }}
                />
                {/* Door */}
                <motion.rect
                  x="185" y="320" width="30" height="40"
                  stroke="hsl(var(--dark-surface-foreground))"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 2 }}
                />

                {/* === LIGHTING SYSTEM === */}
                {activeSystem === "lighting" && (
                  <>
                    {/* Light points with glow */}
                    {[
                      { cx: 140, cy: 255 },
                      { cx: 260, cy: 255 },
                      { cx: 140, cy: 325 },
                      { cx: 260, cy: 325 },
                      { cx: 200, cy: 180 },
                    ].map((pos, i) => (
                      <g key={`light-${i}`}>
                        <motion.circle
                          cx={pos.cx} cy={pos.cy} r="12"
                          fill={systemInfo.lighting.color}
                          fillOpacity="0.08"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: [1, 1.4, 1], opacity: [0.08, 0.15, 0.08] }}
                          transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.circle
                          cx={pos.cx} cy={pos.cy} r="3"
                          fill={systemInfo.lighting.color}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </g>
                    ))}
                    {/* Circuit lines */}
                    {[
                      "M140 255 L140 230 L200 230",
                      "M260 255 L260 230 L200 230",
                      "M200 230 L200 180",
                      "M140 325 L140 295 L200 295",
                      "M260 325 L260 295 L200 295",
                    ].map((d, i) => (
                      <motion.path
                        key={`lpath-${i}`}
                        d={d}
                        stroke={systemInfo.lighting.color}
                        strokeWidth="0.5"
                        strokeOpacity="0.3"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.3 + i * 0.15, ease: "easeInOut" }}
                      />
                    ))}
                  </>
                )}

                {/* === HVAC SYSTEM === */}
                {activeSystem === "hvac" && (
                  <>
                    {/* Duct lines */}
                    {[
                      "M200 140 L200 220",
                      "M200 220 L120 220 L120 250",
                      "M200 220 L280 220 L280 250",
                      "M120 290 L120 320",
                      "M280 290 L280 320",
                    ].map((d, i) => (
                      <motion.path
                        key={`hvac-${i}`}
                        d={d}
                        stroke={systemInfo.hvac.color}
                        strokeWidth="1"
                        strokeOpacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: i * 0.2, ease: "easeInOut" }}
                      />
                    ))}
                    {/* Airflow indicators */}
                    {[
                      { cx: 120, cy: 260 },
                      { cx: 280, cy: 260 },
                      { cx: 120, cy: 330 },
                      { cx: 280, cy: 330 },
                    ].map((pos, i) => (
                      <motion.g key={`airflow-${i}`}>
                        <motion.circle
                          cx={pos.cx} cy={pos.cy} r="8"
                          stroke={systemInfo.hvac.color}
                          strokeWidth="0.5"
                          strokeOpacity="0.4"
                          fill="none"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: [0.5, 1.5, 0.5], opacity: [0.4, 0, 0.4] }}
                          transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.text
                          x={pos.cx} y={pos.cy + 3}
                          textAnchor="middle"
                          fontSize="6"
                          fill={systemInfo.hvac.color}
                          fillOpacity="0.6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + i * 0.2 }}
                        >
                          22°
                        </motion.text>
                      </motion.g>
                    ))}
                    {/* Central unit */}
                    <motion.rect
                      x="185" y="130" width="30" height="15"
                      stroke={systemInfo.hvac.color}
                      strokeWidth="0.8"
                      strokeOpacity="0.5"
                      fill={systemInfo.hvac.color}
                      fillOpacity="0.05"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </>
                )}

                {/* === SECURITY SYSTEM === */}
                {activeSystem === "security" && (
                  <>
                    {/* Perimeter line */}
                    <motion.rect
                      x="50" y="90" width="300" height="280"
                      stroke={systemInfo.security.color}
                      strokeWidth="0.5"
                      strokeOpacity="0.15"
                      strokeDasharray="8 4"
                      rx="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    {/* Camera points */}
                    {[
                      { x: 80, y: 220, angle: 45 },
                      { x: 320, y: 220, angle: -45 },
                      { x: 200, y: 100, angle: 90 },
                      { x: 80, y: 360, angle: 45 },
                      { x: 320, y: 360, angle: -45 },
                    ].map((cam, i) => (
                      <g key={`cam-${i}`}>
                        {/* Camera dot */}
                        <motion.circle
                          cx={cam.x} cy={cam.y} r="3"
                          fill={systemInfo.security.color}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                        />
                        {/* Detection cone */}
                        <motion.path
                          d={`M${cam.x} ${cam.y} L${cam.x + Math.cos((cam.angle * Math.PI) / 180) * 30} ${cam.y + Math.sin((cam.angle * Math.PI) / 180) * 30} L${cam.x + Math.cos(((cam.angle + 40) * Math.PI) / 180) * 25} ${cam.y + Math.sin(((cam.angle + 40) * Math.PI) / 180) * 25} Z`}
                          fill={systemInfo.security.color}
                          fillOpacity="0.06"
                          stroke={systemInfo.security.color}
                          strokeWidth="0.3"
                          strokeOpacity="0.2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.8, 0] }}
                          transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
                        />
                      </g>
                    ))}
                    {/* Smart lock on door */}
                    <motion.circle
                      cx="200" cy="335" r="4"
                      stroke={systemInfo.security.color}
                      strokeWidth="1"
                      fill={systemInfo.security.color}
                      fillOpacity="0.15"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    />
                    <motion.text
                      x="200" y="337"
                      textAnchor="middle"
                      fontSize="4"
                      fill={systemInfo.security.color}
                      fillOpacity="0.8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      🔒
                    </motion.text>
                  </>
                )}
              </svg>
            </div>

            {/* Active system description */}
            <motion.p
              key={activeSystem}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-sm text-dark-surface-foreground/50 font-sans font-light max-w-sm mt-6"
            >
              {systemInfo[activeSystem].description}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartHomeSection;
