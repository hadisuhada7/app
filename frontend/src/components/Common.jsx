import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2, LayoutTemplate, ShoppingCart, Code2, Globe, Layers, Smartphone, Server, Palette, ListChecks,
  MonitorSmartphone, MousePointerClick, ClipboardList, TrendingUp, UserRound, Wrench, MessageCircle, CloudUpload,
  BarChart3, BookOpen, Sparkles, ShieldCheck, Headset, Briefcase, ArrowRight, Check, MapPin, MessagesSquare,
} from "lucide-react";

const ICONS = {
  building: Building2, layout: LayoutTemplate, cart: ShoppingCart, code: Code2, globe: Globe, layers: Layers,
  phone: Smartphone, server: Server, palette: Palette, list: ListChecks, devices: MonitorSmartphone,
  pointer: MousePointerClick, clipboard: ClipboardList, trend: TrendingUp, user: UserRound, wrench: Wrench,
  chat: MessageCircle, cloud: CloudUpload, chart: BarChart3, book: BookOpen, sparkle: Sparkles, shield: ShieldCheck,
  headset: Headset, briefcase: Briefcase, arrow: ArrowRight, check: Check, pin: MapPin, meet: MessagesSquare,
};

export const Icon = ({ name, size = 18, ...rest }) => {
  const C = ICONS[name] || Sparkles;
  return <C size={size} strokeWidth={1.8} {...rest} />;
};

export const Reveal = ({ children, delay = 0, className = "", as = "div", ...rest }) => {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </M>
  );
};

export const Eyebrow = ({ children, className = "" }) => <span className={`eyebrow ${className}`}>{children}</span>;

export const SectionHeading = ({ eyebrow, title, text, center, id }) => (
  <Reveal className={`section-heading ${center ? "center" : ""}`}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 id={id}>{title}</h2>
    {text && <p>{text}</p>}
  </Reveal>
);

export const SmartLink = ({ to, children, className, ...rest }) =>
  to.startsWith("http") ? (
    <a href={to} target="_blank" rel="noopener noreferrer" className={className} {...rest}>{children}</a>
  ) : (
    <Link to={to} className={className} {...rest}>{children}</Link>
  );

export const Btn = ({ to, variant = "primary", children, arrow = true, testid }) => (
  <SmartLink to={to} className={`btn ${variant}`} data-testid={testid}>
    {children}
    {arrow && <ArrowRight size={15} strokeWidth={2.2} />}
  </SmartLink>
);

export const BtnLink = ({ to, children, testid }) => (
  <SmartLink to={to} className="btn-link" data-testid={testid}>
    {children} <ArrowRight size={14} strokeWidth={2.2} />
  </SmartLink>
);

export const IconBox = ({ name }) => (
  <span className="icon-box"><Icon name={name} size={17} /></span>
);

export const FeatureCard = ({ icon, title, text, children, index = 0, testid }) => (
  <Reveal className="card feature-card" delay={(index % 4) * 0.07} data-testid={testid}>
    <IconBox name={icon} />
    <h3>{title}</h3>
    <p>{text}</p>
    {children}
  </Reveal>
);

export const ServiceGrid = ({ services, textKey, linkLabel, prefix }) => (
  <div className="grid-4">
    {services.map((s, i) => (
      <FeatureCard key={s.slug} icon={s.icon} title={s.title} text={s[textKey]} index={i} testid={`${prefix}-service-${s.slug}`}>
        {linkLabel && <BtnLink to={`/layanan/${s.slug}`}>{linkLabel}</BtnLink>}
      </FeatureCard>
    ))}
  </div>
);

export const Steps = ({ steps, prefix }) => (
  <div className="steps">
    {steps.map((s, i) => (
      <Reveal className="step" key={s.title} delay={i * 0.08} data-testid={`${prefix}-step-${i + 1}`}>
        <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
        <h3>{s.title}</h3>
        <p>{s.text}</p>
      </Reveal>
    ))}
  </div>
);

export const PortfolioCard = ({ item, label, index = 0 }) => (
  <Reveal className="portfolio-card" delay={(index % 4) * 0.06} data-testid={`portfolio-card-${index}`}>
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="portfolio-thumb" aria-label={`Kunjungi ${item.name}`}>
      <img src={item.image} alt={`Tampilan website ${item.name}`} loading="lazy" width="800" height="500" />
    </a>
    <div className="portfolio-content">
      <span className="portfolio-label">{label}</span>
      <h3>{item.name}</h3>
      <BtnLink to={item.url} testid={`portfolio-visit-${index}`}>Kunjungi Website</BtnLink>
    </div>
  </Reveal>
);

export const CtaBlock = ({ eyebrow, title, text, children, testid = "cta-block" }) => (
  <section className="cta-section">
    <div className="container">
      <Reveal className="cta" data-testid={testid}>
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-buttons">{children}</div>
      </Reveal>
    </div>
  </section>
);

export const VisualCard = ({ kicker, title, text, pill, pillIcon = "check", testid }) => (
  <Reveal className="visual-stage" data-testid={testid}>
    <div className="visual-card">
      <span className="visual-kicker">{kicker}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="visual-lines"><span /><span /><span /></div>
    </div>
    <div className="visual-pill"><Icon name={pillIcon} size={14} /> {pill}</div>
  </Reveal>
);
