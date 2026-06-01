import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  ShieldCheck,
  TrendingUp,
  Landmark,
  HeartHandshake,
  GraduationCap,
  Mail,
  CheckCircle2,
  Home,
  Stethoscope,
  Phone,
  DollarSign,
} from 'lucide-react';

export default function App() {
  const calendlyUrl = 'https://calendly.com/orientacionfinanciera/puertorico';
  const phoneNumber = '17876342731';
  const email = 'info@danielymelendez.com';

  const services = [
    {
      icon: Landmark,
      title: 'Planes de Retiro',
      text: '401(k) rollover, cuentas IRA y Plan Keogh personalizado, diseñados para ayudarte a construir un futuro financiero sólido.',
    },
    {
      icon: TrendingUp,
      title: 'Anualidades',
      text: 'Crea ingresos, crecimiento y protección a largo plazo.',
    },
    {
      icon: HeartHandshake,
      title: 'Dueños de Negocio',
      text: 'Orientación sobre Buy & Sell Agreement, Key Person y otras estrategias para proteger la continuidad, compra ó venta del negocio.',
    },
    {
      icon: ShieldCheck,
      title: 'Protección de Activos',
      text: 'Cuida ante riesgos, demandas e incertidumbre.',
    },
    {
      icon: Home,
      title: 'Prepago de Hipoteca',
      text: 'Estrategias para pagar tu hipoteca más rápido y ahorrar miles de dólares en intereses.',
    },
    {
      icon: GraduationCap,
      title: 'Fondo Educativo',
      text: 'Planificación para asegurar la educación de tus hijos con crecimiento y visión de futuro.',
    },
    {
      icon: CheckCircle2,
      title: 'Long Term Care',
      text: 'Asegura tu salud y patrimonio ante gastos de cuidado a largo plazo, brindando seguridad, tranquilidad para ti y tu familia.',
    },
    {
      icon: Stethoscope,
      title: 'Seguro Médico',
      text: 'Alternativas para cuidar tu salud y reducir el impacto económico ante imprevistos y gastos médicos.',
    },
  ];

  const highlights = [
    'Planes de Retiro',
    'Anualidades',
    'Protección de Activos',
    'Prepago de Hipoteca',
    'Fondo Educativo',
    'Estrategias para Dueños de Negocio',
    'Ventajas Contributivas',
  ];

  return (
    <div className="site">
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <div className="brand-mark"><span className="brand-mark-text"><img src="/logo-daniely.jpg" alt="Logo Daniely" className="brand-mark-logo" /></span><img src="/logo-daniely.jpg" alt="Logo Daniely Meléndez" className="brand-mark-logo" /></div>
            <div>
              <p className="brand-name">Daniely Meléndez</p>
              <p className="brand-subtitle">Arquitectura Financiera</p>
            </div>
          </div>
          <a className="top-button" href={calendlyUrl} target="_blank" rel="noreferrer">
            Agendar Cita
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="glow gold"></div>
          <div className="glow green"></div>

          <motion.div
            className="floating-dollar"
            animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <DollarSign size={150} />
          </motion.div>

          <div className="container hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="hero-copy"
            >
              <p className="eyebrow">Orientación financiera libre de costo</p>
              <h1>Ayudo a estructurar, proteger y multiplicar tu dinero.</h1>
              <p className="hero-text">
                Te acompaño a organizar tu realidad financiera, diseñar estrategias y tomar decisiones con visión de futuro.
              </p>

              <div className="actions">
                <motion.a
                  href={`tel:${phoneNumber}`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="button button-primary"
                >
                  LLAMAR / ESCRIBIR (787) 634-2731
                </motion.a>
                <motion.a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="button button-outline"
                >
                  <Calendar size={19} />
                  ORIENTACIÓN LIBRE DE COSTO
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hero-card"
            >
              <div className="green-card">
                <p className="card-label">Daniely Meléndez</p>
                <h2>Arquitectura Financiera</h2>
                <p>Consultoría Financiera Personalizada.</p>
                <div className="highlight-list">
                  {highlights.map((item) => (
                    <motion.div key={item} whileHover={{ x: 6 }} className="highlight-item">
                      <CheckCircle2 size={20} />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="about section">
          <div className="container about-grid">
            <div className="about-intro">
              <p className="section-label">Acerca de mí</p>
              <h2>Soy Daniely Meléndez</h2>
              <motion.img
                src="/foto-daniely.jpg"
                alt="Daniely Meléndez"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                className="profile-photo"
              />
            </div>

            <div className="about-text">
              <p>Profesional en Asesoría Financiera con una sólida formación y una trayectoria de más de una década en la industria de seguros.</p>
              <p>Obtuve un Bachillerato en Administración de Empresas concentración en Mercadeo de la Universidad de Puerto Rico, donde también cursé estudios en finanzas, contabilidad y economía, adquiriendo una base fundamental para el análisis y gestión financiera.</p>
              <p>Licenciada como Representante Autorizada por el Comisionado de Seguros de Puerto Rico en las líneas de Salud, Vida e Incapacidad.</p>
              <p>Estoy certificada como CPFC & CCFP (Certified Personal Financial Coach), para orientar sobre organización económica, educación financiera y desarrollo de estrategias.</p>
              <p>Además, soy Corredora de Bienes Raíces que me permite integrar una visión más amplia sobre la creación de patrimonio y las oportunidades de inversión.</p>
              <p>Ofrezco asesoría a dueños de negocios, individuos y familias para la protección de su bienestar económico.</p>
            </div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="services section"
        >
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Servicios</p>
              <h2>Soluciones para organizar tu futuro financiero</h2>
              <p>Cada persona y cada negocio tiene una realidad distinta. Por eso, la orientación comienza entendiendo tus metas, riesgos y prioridades.</p>
            </div>

            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div key={service.title} whileHover={{ y: -6 }} className="service-card">
                    <div className="service-icon">
                      <Icon size={30} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <section className="cta section">
          <div className="container cta-box">
            <div>
              <p className="cta-label">Comienza hoy</p>
              <h2>Cada meta financiera comienza con una decisión.</h2>
              <p>Organizarte hoy puede ayudarte a vivir con más tranquilidad mañana. Agenda tu orientación y comencemos a diseñar una estrategia para ti.</p>
            </div>
            <div className="contact-card">
              <motion.a href={`tel:${phoneNumber}`} whileHover={{ scale: 1.03 }} className="button button-primary full">
                <Phone size={19} />
                LLAMAR / ESCRIBIR (787) 634-2731
              </motion.a>
              <motion.a href={calendlyUrl} target="_blank" rel="noreferrer" whileHover={{ scale: 1.03 }} className="button button-light full">
                <Calendar size={19} />
                ORIENTACIÓN LIBRE DE COSTO
              </motion.a>
              <a href={`mailto:${email}`} className="button button-light full email-button">
                <Mail size={19} />
                {email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Daniely Meléndez · Arquitectura Financiera</p>
        <span>INTEGRIDAD · ESTRATEGIA · RESULTADOS</span>
        <span>{email}</span>
      </footer>
    </div>
  );
}
