import { Menu, X, Mountain, Users, Calendar, Award, MapPin, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logosntr.webp" alt="Sierra Nevada Trail Running" className="h-12" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#sobre-nosotros" className="text-slate-700 hover:text-blue-700 transition-colors">Sobre Nosotros</a>
              <a href="#eventos" className="text-slate-700 hover:text-blue-700 transition-colors">Eventos</a>
              <a href="#entrenamientos" className="text-slate-700 hover:text-blue-700 transition-colors">Entrenamientos</a>
              <a href="#contacto" className="text-slate-700 hover:text-blue-700 transition-colors">Contacto</a>
              <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Únete
              </button>
            </div>

            <button
              className="md:hidden text-slate-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#sobre-nosotros" className="block text-slate-700 hover:text-blue-700">Sobre Nosotros</a>
              <a href="#eventos" className="block text-slate-700 hover:text-blue-700">Eventos</a>
              <a href="#entrenamientos" className="block text-slate-700 hover:text-blue-700">Entrenamientos</a>
              <a href="#contacto" className="block text-slate-700 hover:text-blue-700">Contacto</a>
              <button className="w-full bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Únete
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 h-screen flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/sntr01.jpg" alt="Sierra Nevada Trail Running" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 w-full pb-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
              Únete al Club
              <ChevronRight className="h-5 w-5" />
            </button>
            <button className="bg-white/90 backdrop-blur-sm text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all border border-white shadow-lg">
              Ver Próximos Eventos
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50" id="sobre-nosotros">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Bienvenid@s a Sierra Nevada Trail Running Club </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Somos un club joven, nacido a principios de 2023 en el corazón de Sierra Nevada (Granada), y estamos en pleno crecimiento. Nuestra esencia es compartir la pasión por la montaña a través de salidas comunitarias y actividades que fortalecen los lazos entre soci@s.
No seguimos un calendario fijo: preferimos la espontaneidad y la conexión entre quienes formamos parte del grupo. Más que un club, somos una comunidad en movimiento, un lugar donde la montaña se convierte en escenario de amistad, aprendizaje y superación.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Comunidad</h3>
              <p className="text-slate-600">
                Más de 100 miembros activos que comparten tu pasión por el trail running
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Eventos</h3>
              <p className="text-slate-600">
                Organizamos salidas y competiciones durante todo el año
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Entrenamiento</h3>
              <p className="text-slate-600">
                Planes personalizados con entrenadores certificados para todos los niveles
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Rutas Únicas</h3>
              <p className="text-slate-600">
                Acceso a las mejores rutas de montaña con guías experimentados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white" id="eventos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Próximos Eventos</h2>
            <p className="text-xl text-slate-600">
              Únete a nuestras próximas aventuras en la montaña
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
                <img
                  src="https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Trail running event"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  15 KM
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center gap-2 text-blue-700 text-sm mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>8 Noviembre 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Trail Nocturno</h3>
                <p className="text-slate-600 mb-4">
                  Una experiencia única corriendo bajo las estrellas por senderos de montaña
                </p>
                <button className="text-blue-700 font-semibold hover:text-blue-800 flex items-center gap-1">
                  Más información
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
                <img
                  src="https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mountain race"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  30 KM
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center gap-2 text-blue-700 text-sm mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>22 Noviembre 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Ultra Montaña</h3>
                <p className="text-slate-600 mb-4">
                  Desafía tus límites en nuestra carrera más exigente del año
                </p>
                <button className="text-blue-700 font-semibold hover:text-blue-800 flex items-center gap-1">
                  Más información
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
                <img
                  src="https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Training session"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  10 KM
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center gap-2 text-blue-700 text-sm mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Todos los Sábados</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Entrenamiento Grupal</h3>
                <p className="text-slate-600 mb-4">
                  Sesiones de entrenamiento para todos los niveles con guías profesionales
                </p>
                <button className="text-blue-700 font-semibold hover:text-blue-800 flex items-center gap-1">
                  Más información
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 relative overflow-hidden" id="entrenamientos">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para tu Próxima Aventura?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a nuestro club y descubre el trail running con una comunidad apasionada. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105">
              Comienza Ahora
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white/10 transition-all">
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12" id="contacto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <img src="/logosntr.webp" alt="Sierra Nevada Trail Running" className="h-12 brightness-0 invert" />
              </div>
              <p className="text-slate-400">
                Tu comunidad de trail running en Sierra Nevada
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#sobre-nosotros" className="hover:text-blue-400 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#eventos" className="hover:text-blue-400 transition-colors">Eventos</a></li>
                <li><a href="#entrenamientos" className="hover:text-blue-400 transition-colors">Entrenamientos</a></li>
                <li><a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-slate-400">
                <li>info@trailrunningclub.com</li>
                <li>+34 XXX XXX XXX</li>
                <li>Sierra Nevada, España</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Strava</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Sierra Nevada Trail Running Club. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
