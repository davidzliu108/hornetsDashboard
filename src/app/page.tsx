import Image from "next/image";
import LoginButton from '../components/LoginButton';

export default function Home() {
  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 flex flex-col items-center justify-between p-4 text-white">
      {/* Header with Hornets Logo */}
      <header className="w-full flex justify-center py-6">
        <div className="relative w-102 h-30">
          <Image
            src="/hornets-logo.png"
            alt="Charlotte Hornets Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-md mx-auto -mt-30">
        <div className="bg-black bg-opacity-50 backdrop-blur-lg rounded-3xl p-8 w-full shadow-2xl border border-teal-500/30">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">BUZZCENTER</h1>
            <p className="text-purple-300 text-lg">Access your Hornets fan portal</p>
          </div>
          
          <div className="space-y-6 pt-4 flex justify-center">
            <LoginButton />
          </div>
          
        </div>
      </main>

      {/* Teal and purple hexagon pattern background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-teal-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/4 -right-24 w-80 h-80 bg-purple-700 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-teal-700 rounded-full filter blur-3xl opacity-15"></div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 flex justify-center items-center text-gray-400 text-sm">
        <p>BuzzCenter powered by Fastbreak AI </p>
      </footer>
    </div>
  );
}
