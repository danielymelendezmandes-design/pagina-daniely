import React from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

export default function DanielyLandingPage() {
  const calendlyUrl = "https://calendly.com/orientacionfinaciera/puertorico";
  const phoneNumber = "17876342731";
  const email = "info@danielymelendez.com";
  const profileImage = "/foto-daniely.jpg";

  const services = [
    {
      icon: Landmark,
      title: "Planes de Retiro",
      text: "401(k) rollover, cuentas IRA y Plan Keogh personalizado, diseñados para ayudarte a construir un futuro financiero sólido.",
    },
    {
      icon: TrendingUp,
      title: "Anualidades",
      text: "Soluciones diseñadas para crear ingresos, crecimiento y protección a largo plazo.",
    },
    {
      icon: HeartHandshake,
      title: "Dueños de Negocio",
      text: "Orientación sobre Buy & Sell Agreement, Key Person y otras estrategias para proteger la continuidad, compra o venta del negocio.",
    },
    {
      icon: ShieldCheck,
      title: "Protección de Activos",
      text: "Cuida lo que has construido ante riesgos, demandas e incertidumbre.",
    },
    {
      icon: Home,
      title: "Prepago de Hipoteca",
      text: "Estrategias para pagar tu hipoteca más rápido y ahorrar miles de dólares en intereses.",
    },
    {
      icon: GraduationCap,
      title: "Fondo Educativo",
      text: "Planificación para asegurar la educación de tus hijos con crecimiento y visión de futuro.",
    },
    {
      icon: CheckCircle2,
      title: "Long Term Care",
      text: "Asegura tu salud y patrimonio ante gastos de cuidado a largo plazo, brindando seguridad y tranquilidad para ti y tu familia.",
    },
    {
      icon: Stethoscope,
      title: "Seguro Médico",
      text: "Alternativas para cuidar tu salud y reducir el impacto económico ante imprevistos y gastos médicos.",
    },
  ];

  const highlights = [
    "Planes de Retiro",
    "Anualidades",
    "Protección de Activos",
    "Prepago de Hipoteca",
    "Fondo Educativo",
    "Estrategias para Dueños de Negocio",
    "Ventajas Contributivas",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#0d2f23]">
      <header className="sticky top-0 z-50 border-b border-[#d6b15f]/30 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-5">
          <div className="min-w-0">
            <p className="truncate text-base font-semibold tracking-wide text-[#0d2f23] sm:text-lg">
              Daniely Meléndez
            </p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#b99545] sm:text-xs sm:tracking-[0.25em]">
              Arquitectura Financiera
            </p>
          </div>

          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden shrink-0 rounded-full bg-[#0f6b4f] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#0b553f] md:inline-flex"
          >
            Agendar Cita
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f7fbf8] to-[#eaf3ee]">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#d6b15f]/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#0f6b4f]/15 blur-3xl" />

          <motion.div
            className="absolute right-10 top-24 hidden opacity-10 lg:block"
            animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <DollarSign className="h-40 w-40 text-[#b99545]" />
          </motion.div>

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-5 sm:py-20 md:grid-cols-2 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-[#0d2f23] sm:text-4xl md:mx-0 md:text-5xl lg:text-6xl">
                Ayudo a estructurar, proteger y multiplicar tu dinero.
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#315246] sm:text-lg md:mx-0">
                Te acompaño a organizar tu realidad financiera, diseñar estrategias y tomar decisiones con visión de futuro.
              </p>

              <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
                <motion.a
                  href={`tel:${phoneNumber}`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full max-w-sm items-center justify-center rounded-full bg-[#0f6b4f] px-6 py-4 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-[#0b553f] sm:w-auto sm:px-7 sm:text-base"
                >
                  LLAMAR / ESCRIBIR (787) 634-2731
                </motion.a>

                <motion.a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full border border-[#d6b15f] bg-white px-6 py-4 text-center text-sm font-semibold text-[#0d2f23] transition hover:bg-[#fff8e7] sm:w-auto sm:px-7 sm:text-base"
                >
                  <Calendar className="h-5 w-5 shrink-0" />
                  ORIENTACIÓN LIBRE DE COSTO
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="w-full rounded-[2rem] border border-[#d6b15f]/40 bg-white p-4 shadow-2xl sm:p-6"
            >
              <div className="rounded-[1.5rem] bg-[#0f6b4f] p-6 text-white sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-[#f0d58a] sm:text-sm sm:tracking-[0.25em]">
                  Daniely Meléndez
                </p>
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Arquitectura Financiera</h2>
                <p className="mt-5 leading-7 text-white/90">Consultoría financiera personalizada.</p>

                <div className="mt-8 grid gap-4">
                  {highlights.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#f0d58a]" />
                      <span className="text-sm sm:text-base">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-5 sm:py-20">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b99545]">
                Acerca de mí
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Soy Daniely Meléndez</h2>

              <motion.img
                src={profileImage}
                alt="Daniely Meléndez"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-8 w-full max-w-[320px] rounded-[2rem] border border-[#d6b15f]/40 object-contain shadow-2xl md:max-w-[380px]"
              />
            </div>

            <div className="space-y-5 text-base leading-8 text-[#315246] sm:text-lg">
              <p>
                Profesional en Asesoría Financiera con una sólida formación y una trayectoria de más de una década en la industria de seguros.
              </p>
              <p>
                Obtuve un Bachillerato en Administración de Empresas en Mercadeo en la Universidad de Puerto Rico, donde también cursé estudios en finanzas, contabilidad y economía, adquiriendo una base fundamental para el análisis y gestión financiera.
              </p>
              <p>
                Licenciada como Representante Autorizada por el Comisionado de Seguros de Puerto Rico en las líneas de Salud, Vida e Incapacidad.
              </p>
              <p>
                Estoy certificada como CPFC y CCFP (Certified Personal Financial Coach), lo que respalda mi preparación para orientar sobre organización financiera y toma de decisiones estratégicas.
              </p>
              <p>
                Además, soy Corredora de Bienes Raíces, lo que me permite integrar una visión más amplia sobre la creación de patrimonio y las oportunidades de inversión.
              </p>
              <p>
                Ofrezco asesoría a dueños de negocios, individuos y familias para la protección de su bienestar económico.
              </p>
            </div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="bg-[#f7fbf8] py-14 sm:py-20"
        >
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-5">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b99545]">
                Servicios
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Soluciones para organizar tu futuro financiero
              </h2>
              <p className="mt-5 text-base leading-8 text-[#315246] sm:text-lg">
                Cada persona y cada negocio tiene una realidad distinta. Por eso, la orientación comienza entendiendo tus metas, riesgos y prioridades.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    whileHover={{ y: -6 }}
                    className="rounded-[1.5rem] border border-[#d6b15f]/30 bg-white p-6 shadow-sm transition hover:shadow-xl sm:p-7"
                  >
                    <div className="mb-5 inline-flex rounded-2xl bg-[#0f6b4f]/10 p-3 text-[#0f6b4f]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0d2f23]">{service.title}</h3>
                    <p className="mt-3 leading-7 text-[#315246]">{service.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-5 sm:py-20">
          <div className="rounded-[2rem] bg-[#0d2f23] p-6 text-white sm:p-8 md:p-14">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="text-center md:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f0d58a]">
                  Comienza hoy
                </p>
                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  Cada meta financiera comienza con una decisión.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/85 sm:text-lg">
                  Organizarte hoy puede ayudarte a vivir con más tranquilidad mañana. Agenda tu orientación y comencemos a diseñar una estrategia para ti.
                </p>
              </div>

              <div className="flex flex-col gap-4 rounded-[1.5rem] bg-white p-5 text-[#0d2f23] shadow-xl sm:p-6">
                <motion.a
                  href={`tel:${phoneNumber}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0f6b4f] px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#0b553f] sm:px-7 sm:text-base"
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  LLAMAR / ESCRIBIR (787) 634-2731
                </motion.a>

                <motion.a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d6b15f] px-5 py-4 text-center text-sm font-semibold transition hover:bg-[#fff8e7] sm:px-7 sm:text-base"
                >
                  <Calendar className="h-5 w-5 shrink-0" />
                  ORIENTACIÓN LIBRE DE COSTO
                </motion.a>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d6b15f] px-5 py-4 text-center text-sm font-semibold transition hover:bg-[#fff8e7] sm:px-7 sm:text-base"
                >
                  <Mail className="h-5 w-5 shrink-0" />
                  <span className="break-all">{email}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d6b15f]/30 bg-white px-4 py-8 text-center sm:px-5">
        <p className="font-semibold text-[#0d2f23]">
          Daniely Meléndez · Arquitectura Financiera
        </p>
        <p className="mt-2 text-sm text-[#315246]">
          INTEGRIDAD · ESTRATEGIA · RESULTADOS
        </p>
        <p className="mt-2 break-all text-sm text-[#315246]">{email}</p>
      </footer>
    </div>
  );
}
