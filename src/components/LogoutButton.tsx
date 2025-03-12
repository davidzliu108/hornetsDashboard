export default function LogoutButton() {
    return (
      <a 
        href="/api/auth/logout?returnTo=/" 
        className="relative overflow-hidden bg-teal-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-teal-300 inline-flex items-center justify-center group"
      >
        <div className="relative z-10 flex items-center justify-center gap-2">
          {/* Stylized basketball icon */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:rotate-90"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 2C12 12 12 22 12 22" stroke="currentColor" strokeWidth="2" />
            <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
            <path d="M3.5 5.5C8.5 8.5 15.5 8.5 20.5 5.5" stroke="currentColor" strokeWidth="2" />
            <path d="M3.5 18.5C8.5 15.5 15.5 15.5 20.5 18.5" stroke="currentColor" strokeWidth="2" />
          </svg>
          
          <span className="font-extrabold tracking-wider">LOGOUT</span>
          
        </div>
        
        {/* Background pattern effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-teal-500 opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
        
        {/* Hexagon pattern overlay - representing honeycomb/hornet nest */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 transform rotate-45 scale-150">
            <div className="absolute top-0 left-0 w-full h-full border-2 border-white border-opacity-20" 
                 style={{clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"}} />
          </div>
        </div>
      </a>
    );
  }