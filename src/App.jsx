import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  Clock,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  Users,
  ArrowRight,
  ChevronDown,
  Award,
  BookOpen,
  MessageCircle,
  Play,
  Lock,
  Gift,
  Star,
  Target,
  BarChart4
} from 'lucide-react';
import { cn } from './lib/utils';
import jaimePhoto from './assets/jaime-jaramillo.png';


// --- Constants ---
const PAYMENT_LINK = "https://go.hotmart.com/A103952710T";
const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=3113423740&text=Hola%20Diego%20tengo%20preguntas%20sobre%20el%20curso";
const VIDEO_ID = "DfugZeziq-Q";

// --- Components ---

const FloatingWhatsApp = () => (
  <motion.a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-6 right-6 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors flex items-center justify-center"
    aria-label="Contactar por WhatsApp"
  >
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <MessageCircle size={32} fill="currentColor" />
    </motion.div>
  </motion.a>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 45, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimerUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl md:rounded-2xl mb-2">
        <span className="text-2xl md:text-3xl font-black text-yellow-500 font-mono tracking-tighter">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-slate-400">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center gap-2 md:gap-4">
      <TimerUnit value={timeLeft.days} label="Días" />
      <TimerUnit value={timeLeft.hours} label="Horas" />
      <TimerUnit value={timeLeft.minutes} label="Min" />
      <TimerUnit value={timeLeft.seconds} label="Seg" />
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-bold text-lg text-slate-800 hover:text-yellow-600 transition-colors"
      >
        <span>{question}</span>
        <ChevronDown className={cn("transition-transform duration-300", isOpen && "rotate-180 text-yellow-500")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="py-4 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SectionHeader = ({ title, subtitle, className }) => (
  <div className={cn("text-center mb-16", className)}>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xl text-slate-600"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="h-1.5 w-24 bg-yellow-500 mx-auto mt-6 rounded-full" />
  </div>
);

// --- Main App ---

const App = () => {
  const bonuses = [
    { title: "Curso de Inversiones Inmobiliarias", value: "USD $90", desc: "Aprenda a invertir en ladrillos con poco capital.", icon: <Gift /> },
    { title: "1 Año Club Invierte en Inmuebles", value: "USD $100", desc: "Comunidad exclusiva de networking y oportunidades.", icon: <Users /> },
    { title: "6 Meses 'Pregúntale a Jaime'", value: "USD $120", desc: "Sesiones mensuales en vivo para resolver todas sus dudas.", icon: <MessageCircle /> },
    { title: "Bono Especial Impuestos", value: "USD $50+", desc: "30% de descuento para optimizar sus tributos legalmente.", icon: <ShieldCheck /> },
  ];

  const features = [
    { icon: <TrendingUp className="text-yellow-500" />, title: "Estrategia Probada", desc: "Aprenda a elegir acciones con alto potencial antes que el mercado masivo." },
    { icon: <Lock className="text-yellow-500" />, title: "Seguridad Anti-Estafas", desc: "Identifique brokers regulados y gestione el riesgo profesionalmente." },
    { icon: <Smartphone className="text-yellow-500" />, title: "Acceso Vitalicio", desc: "Repita las 48 horas de formación cuantas veces quiera, de por vida." },
    { icon: <Target className="text-yellow-500" />, title: "Inteligencia Emocional", desc: "Domine el pánico y la euforia para no sabotear su propio éxito." },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-yellow-200 overflow-x-hidden">
      <FloatingWhatsApp />

      {/* Ribbon */}
      <div className="bg-yellow-500 text-black py-3 px-4 text-center text-xs md:text-sm font-black uppercase tracking-widest sticky top-0 z-50 shadow-lg">
        🔥 Oferta de lanzamiento: Ahorra 50% + 4 Bonos Exclusivos solo hoy
      </div>

      {/* Hero Section */}
      <header className="relative bg-[#0a0f1d] text-white pt-24 pb-32 px-4 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold text-yellow-500"
            >
              <Star size={14} fill="currentColor" /> INSCRIPCIONES ABIERTAS 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight"
            >
              Domine la Bolsa de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Colombia y USA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-400 max-w-2xl"
            >
              Deje de apostar y empiece a invertir con metodología profesional. Aprenda el sistema real que usan los expertos sin complicaciones.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <a
                href={PAYMENT_LINK}
                className="group relative bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-5 rounded-2xl font-black text-xl shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all transform hover:scale-105 flex items-center justify-center gap-4 overflow-hidden"
              >
                <span className="relative z-10">ASEGURAR MI CUPO</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-slate-400 justify-center lg:justify-start">
                  <ShieldCheck size={18} className="text-green-500" /> Pago 100% Seguro
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-500 justify-center lg:justify-start mt-1">
                  7 Días de garantía incondicional
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex-1 w-full relative"
          >
            <div className="aspect-video bg-slate-800 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden relative group">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                title="Presentación del Curso"
                allowFullScreen
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl pointer-events-none" />
            </div>
            {/* Social Proof Badge */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-white text-slate-900 p-6 rounded-3xl shadow-2xl border border-slate-100 hidden sm:block overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=${i + 20}`} className="w-10 h-10 rounded-full border-2 border-white ring-2 ring-slate-50" alt="" />
                    ))}
                  </div>
                  <div>
                    <div className="font-black text-lg">+5,000</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Alumnos Formados</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Pain Points Section */}
      <section className="py-32 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Invertir sin formación no es inversión..."
            subtitle="Es, sencillamente, una apuesta arriesgada donde la casa siempre gana."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "¿Siente que la inflación devora sus ahorros mes tras mes?",
              "¿Le aterra caer en una estafa 'mágica' de internet?",
              "¿Ve el mercado bursátil como un laberinto indescifrable?",
              "¿Desea una jubilación digna pero no confía solo en el sistema actual?"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex gap-6 group hover:shadow-xl hover:border-red-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                  <Lock size={20} />
                </div>
                <p className="font-bold text-slate-700 leading-snug pt-2">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Transformación Radical"
            subtitle="No es solo teoría, es un sistema paso a paso diseñado para resultados reales."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-yellow-400 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-yellow-200 transition-all duration-500 flex flex-col items-start h-full relative z-10 overflow-hidden">
                  <div className="mb-8 p-4 bg-slate-50 text-yellow-600 rounded-2xl group-hover:bg-yellow-500 group-hover:text-white transition-all duration-500">
                    {f.icon}
                  </div>
                  <h3 className="font-black text-2xl mb-4 text-slate-900 leading-tight">{f.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor - Authority */}
      <section className="py-32 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-yellow-500/5 blur-[150px] rounded-full" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="absolute -inset-6 border-2 border-yellow-500/30 rounded-[3rem] -rotate-3" />
              <img
                src={jaimePhoto}
                alt="Jaime Jaramillo"
                className="rounded-[2.5rem] relative w-full shadow-2xl hover:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute -bottom-10 -left-10 bg-yellow-500 text-black p-8 rounded-3xl shadow-2xl">
                <div className="text-4xl font-black">35+</div>
                <div className="text-xs font-bold uppercase tracking-widest">Años de experiencia</div>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-yellow-500 font-black tracking-widest text-sm uppercase">El Mentor</span>
              <h2 className="text-5xl font-black">Jaime Jaramillo</h2>
              <div className="h-2 w-20 bg-yellow-500 rounded-full" />
            </div>
            <p className="text-xl text-slate-300 italic font-medium leading-relaxed">
              "Mi misión es democratizar el acceso a la riqueza. He visto los mercados cambiar por décadas; sé exactamente qué es una moda pasajera y qué es una oportunidad real."
            </p>
            <ul className="space-y-4">
              {[
                "Fundador de Finanzas Emocionales",
                "Experto en Psicología Financiera & Neuroeconomía",
                "Estratega de Inversión en Mercados Emergentes",
                "Mentor de miles de inversionistas en Latinoamérica"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="bg-yellow-500/10 text-yellow-500 p-1 rounded-lg">
                    <CheckCircle size={20} />
                  </div>
                  <span className="text-slate-300 font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Súper Pack de Regalos"
            subtitle="Al inscribirse hoy, recibirá USD $360 adicionales en bonos de alto valor totalmente GRATIS."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bonuses.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white border-2 border-dashed border-slate-200 rounded-[2.5rem] p-10 hover:border-yellow-500 hover:bg-yellow-50/50 transition-all duration-300 group"
              >
                <div className="absolute -top-3 right-8 bg-yellow-500 text-black px-4 py-1 text-[10px] font-black uppercase rounded-lg shadow-lg">
                  Gratis
                </div>
                <div className="w-14 h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-500">
                  {b.icon}
                </div>
                <h4 className="font-black text-xl mb-3 text-slate-800">{b.title}</h4>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{b.desc}</p>
                <div className="pt-6 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest line-through">Valor: {b.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer / Pricing */}
      <section className="py-32 px-4 bg-slate-900 relative overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 4 + 'px',
                height: Math.random() * 4 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-10 md:p-20 shadow-[0_0_100px_rgba(234,179,8,0.2)] text-center relative overflow-hidden"
          >
            {/* Top Badge */}
            <div className="bg-yellow-500 text-black font-black px-12 py-3 rounded-full shadow-2xl inline-block mb-12 transform -translate-y-[150%] md:-translate-y-[180%] tracking-widest uppercase text-sm">
              Inscripciones Limitadas
            </div>

            <div className="space-y-12">
              <div>
                <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs mb-4">Valor total del programa</p>
                <h3 className="text-3xl font-black text-slate-300 line-through opacity-50 tracking-tighter">USD $657</h3>
              </div>

              <div className="space-y-2">
                <p className="text-yellow-600 font-black tracking-widest text-sm uppercase">Oferta hoy solamente</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <span className="text-8xl md:text-9xl font-black text-slate-900 tracking-tighter">
                    <span className="text-4xl md:text-5xl align-top mt-4 inline-block">$</span>347
                  </span>
                </div>
              </div>

              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-8">La oferta termina en:</p>
                <CountdownTimer />
              </div>

              <div className="space-y-6">
                <a
                  href={PAYMENT_LINK}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-8 rounded-3xl font-black text-2xl shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-4 group"
                >
                  ¡SÍ! QUIERO EL ACCESO VITALICIO <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
                <p className="text-slate-500 font-bold text-sm">
                  Disponemos de múltiples métodos de pago y opción de cuotas vía Hotmart.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                  <ShieldCheck size={16} className="text-green-500" /> GARANTÍA DE SATISFACCIÓN
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                  <Lock size={16} className="text-green-500" /> PAGO ENCRIPTADO SSL
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                  <CheckCircle size={16} className="text-green-500" /> ACCESO INSTANTÁNEO
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Preguntas Frecuentes"
            subtitle="Despeje sus dudas y dé el paso con seguridad."
          />
          <div className="space-y-2">
            {[
              { q: "¿Cuándo inician las clases?", a: "El curso inicia de inmediato tras su compra. Las sesiones en vivo 'Pregúntele a Jaime' comienzan el próximo lunes 19 de enero a las 8PM (Col). No obstante, puede empezar con las lecciones grabadas hoy mismo." },
              { q: "¿Qué métodos de pago aceptan?", a: "Pagos seguros vía Hotmart: Tarjeta de crédito (hasta 12 cuotas), PayPal, PSE, Efecty (Col) y métodos locales en toda Latinoamérica." },
              { q: "¿Es seguro pagar por Hotmart?", a: "Hotmart es la plataforma #1 de productos digitales en el mundo hispano. Su compra está protegida y sus datos 100% encriptados." },
              { q: "¿Necesito mucho dinero para empezar a invertir?", a: "No. Precisamente le enseñamos a optimizar su capital. Puede empezar a practicar con cuentas demo y luego invertir sumas pequeñas de forma segura." },
              { q: "¿Recibo los bonos de inmediato?", a: "¡Correcto! Tras la confirmación del pago, recibirá un correo con el acceso a la plataforma donde ya están habilitados los bonos y el curso principal." }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>

          <div className="mt-20 p-12 bg-slate-50 rounded-[2.5rem] border border-slate-200 flex flex-col md:flex-row items-center gap-10">
            <div className="space-y-4 flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black">¿Dudas adicionales?</h3>
              <p className="text-slate-500 font-medium">Hable directamente con nuestro soporte VIP por WhatsApp y reciba atención personalizada.</p>
            </div>
            <a
              href={WHATSAPP_LINK}
              className="bg-white border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-slate-900 hover:text-white transition-all flex items-center gap-3 whitespace-nowrap"
            >
              <MessageCircle size={20} /> CHATEAR CON SOPORTE
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-900 text-slate-400 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="flex flex-col items-center gap-6">
            <div className="text-white font-black text-3xl tracking-tighter">
              FINANZAS<span className="text-yellow-500">EMOCIONALES</span>
            </div>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-500">
              Cualquier inversión implica riesgos financieros. Los resultados mostrados son basados en metodología profesional y dedicación. Esta página no ofrece consejos de inversión individualizados sino educación bursátil. Al participar usted asume la responsabilidad de sus decisiones.
            </p>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest">
            <div className="space-y-2">
              <p>© 2026 Jaime Jaramillo & Finanzas Emocionales. Todos los derechos reservados.</p>
              <p className="text-yellow-500/50">Desarrollado por Dmente Digital</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-yellow-500 transition-colors">Términos</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
