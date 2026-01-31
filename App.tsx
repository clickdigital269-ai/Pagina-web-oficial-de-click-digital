
import React from 'react';
import { 
  BotIcon, 
  ZapIcon, 
  ClockIcon, 
  TrendingUpIcon, 
  MessageCircleIcon, 
  InstagramIcon, 
  MailIcon, 
  MapPinIcon,
  CheckCircleIcon,
  CodeIcon
} from './components/Icons';

const App: React.FC = () => {
  const whatsappUrl = "https://wa.me/50762124398";
  const emailUrl = "mailto:clickdigital269@gmail.com";
  const instagramUrl = "https://instagram.com/Clickdigital269";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
              C
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-800">
              CLICK <span className="text-blue-600">DIGITAL</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#inicio" className="hover:text-blue-600 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-blue-600 transition-colors">¿Qué hacemos?</a>
            <a href="#automatizar" className="hover:text-blue-600 transition-colors">Automatizaciones</a>
            <a href="#beneficios" className="hover:text-blue-600 transition-colors">Beneficios</a>
          </div>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center space-x-2"
          >
            <MessageCircleIcon />
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="hero-gradient pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold mb-8 animate-bounce">
                <ZapIcon />
                <span>IMPULSANDO EL CRECIMIENTO CON IA</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Automatizamos procesos para que tu empresa crezca con <span className="gradient-text">Inteligencia Artificial</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Transformamos la forma en que trabajas. Desde agentes inteligentes hasta flujos automáticos que ahorran tiempo y reducen costos en Panamá.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-all transform hover:scale-105 shadow-xl"
                >
                  <MessageCircleIcon />
                  <span>Hablar por WhatsApp</span>
                </a>
                <a 
                  href={emailUrl}
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-all"
                >
                  <MailIcon />
                  <span>Contactar por Correo</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section id="servicios" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">¿Qué hacemos en Click Digital?</h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Automatización de Procesos",
                  description: "Digitalizamos y automatizamos tareas repetitivas para que tu equipo se enfoque en lo que realmente importa.",
                  icon: <ZapIcon />,
                  color: "blue"
                },
                {
                  title: "Agentes de IA Personalizados",
                  description: "Creamos cerebros digitales capaces de razonar, responder y actuar según las necesidades de tu negocio.",
                  icon: <BotIcon />,
                  color: "teal"
                },
                {
                  title: "Optimización de Costos",
                  description: "Reducimos la carga operativa mediante integraciones inteligentes, logrando una eficiencia sin precedentes.",
                  icon: <TrendingUpIcon />,
                  color: "indigo"
                }
              ].map((service, idx) => (
                <div key={idx} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                  <div className={`w-14 h-14 bg-${service.color}-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What can we automate? */}
        <section id="automatizar" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Impulsa tu negocio con automatizaciones reales</h2>
              <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-blue-500 pl-4">
                "No solo instalamos software, diseñamos soluciones que trabajan para ti 24/7."
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Atención al cliente 24/7", desc: "Responde dudas frecuentes instantáneamente en cualquier canal.", icon: <MessageCircleIcon /> },
                { title: "Agendamiento de Citas", desc: "Sincroniza calendarios y reserva turnos sin intervención humana.", icon: <ClockIcon /> },
                { title: "WhatsApp & Instagram", desc: "Respuestas automáticas inteligentes que cierran ventas.", icon: <InstagramIcon /> },
                { title: "Reportes Automáticos", desc: "Generación de datos y dashboards en tiempo real para decisiones rápidas.", icon: <TrendingUpIcon /> },
                { title: "Flujos con n8n", desc: "Conecta miles de aplicaciones en procesos fluidos y sin errores.", icon: <CodeIcon /> },
                { title: "Procesos Internos", desc: "Gestión de inventarios, facturación y tareas operativas repetitivas.", icon: <CheckCircleIcon /> }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-400 transition-colors">
                  <div className="text-blue-600 mb-4">{item.icon}</div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we help - Clean and Centered */}
        <section id="beneficios" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Por qué elegir Click Digital</h2>
              <p className="text-slate-600 text-lg">Nuestra metodología se enfoca en resultados tangibles para tu empresa.</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { title: "Ahorro masivo de tiempo", desc: "Elimina las tareas manuales que drenan la energía de tu equipo." },
                  { title: "Escalabilidad garantizada", desc: "Crece sin necesidad de aumentar proporcionalmente tu personal." },
                  { title: "Eficiencia Operativa", desc: "Procesos sin errores humanos y con trazabilidad total." },
                  { title: "Experiencia de Cliente Premium", desc: "Respuestas inmediatas que generan confianza y lealtad." }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex space-x-4 text-left">
                    <div className="flex-shrink-0 w-6 h-6 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mt-1">
                      <CheckCircleIcon />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                      <p className="text-slate-600 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16 text-center">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/20 transform hover:scale-105"
                >
                  Hablemos de tu proyecto
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para automatizar tu negocio?</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              No dejes que la competencia te gane con tecnología. Empieza hoy mismo tu transformación digital.
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white text-blue-700 px-10 py-5 rounded-full font-black text-xl hover:bg-slate-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              <MessageCircleIcon />
              <span>Escríbenos por WhatsApp</span>
            </a>
            <p className="mt-6 text-blue-200 font-medium italic">"Hablemos sobre cómo automatizar tu negocio"</p>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">C</div>
                <span className="text-xl font-extrabold tracking-tight text-white">CLICK DIGITAL</span>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed">
                Líderes en implementación de IA y automatización empresarial en Panamá. Ayudamos a empresas locales e internacionales a optimizar sus flujos de trabajo.
              </p>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-6">Contacto</h5>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center space-x-3">
                  <MapPinIcon />
                  <span>Panamá, Colón</span>
                </li>
                <li>
                  <a href="tel:+50762124398" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                    <MessageCircleIcon />
                    <span>+507 6212-4398</span>
                  </a>
                </li>
                <li>
                  <a href={emailUrl} className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                    <MailIcon />
                    <span>clickdigital269@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-6">SÍGUENOS</h5>
              <div className="flex space-x-4">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <InstagramIcon />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                  <MessageCircleIcon />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Click Digital. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Sticky Floating WhatsApp (Mobile) */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden bg-green-500 text-white p-4 rounded-full shadow-2xl animate-pulse"
      >
        <MessageCircleIcon />
      </a>
    </div>
  );
};

export default App;
