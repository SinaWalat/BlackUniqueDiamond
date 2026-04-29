"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { employees } from "@/lib/employees";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Linkedin, 
  Instagram, 
  Globe, 
  MapPin,
  Share2,
  Check
} from "lucide-react";

export default function EmployeeProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  
  // Case-insensitive lookup
  const employee = Object.values(employees).find(
    (e) => e.id.toLowerCase() === id.toLowerCase()
  );

  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!employee) {
    return notFound();
  }

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${employee.name} Profile`,
          url: url
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const links = [
    {
      label: "WhatsApp",
      subtitle: "Message directly",
      url: `https://wa.me/${employee.whatsapp || employee.phone.replace(/[\s\+]/g, '')}`,
      icon: MessageCircle,
      color: "group-hover:text-green-400",
      bgAccent: "bg-green-500/10",
      borderAccent: "group-hover:border-green-500/30",
    },
    {
      label: "Call Now",
      subtitle: employee.phone,
      url: `tel:${employee.phone.replace(/\s/g, '')}`,
      icon: Phone,
      color: "group-hover:text-blue-400",
      bgAccent: "bg-blue-500/10",
      borderAccent: "group-hover:border-blue-500/30",
    },
    {
      label: "Email",
      subtitle: employee.email,
      url: `mailto:${employee.email}`,
      icon: Mail,
      color: "group-hover:text-orange-400",
      bgAccent: "bg-orange-500/10",
      borderAccent: "group-hover:border-orange-500/30",
    },
    {
      label: "Company Website",
      subtitle: "Black Unique Diamond",
      url: "https://blackuniquediamond.com",
      icon: Globe,
      color: "group-hover:text-amber-400",
      bgAccent: "bg-amber-500/10",
      borderAccent: "group-hover:border-amber-500/30",
    },
    {
      label: "Office Location",
      subtitle: employee.location,
      url: `https://maps.google.com/?q=${encodeURIComponent(employee.location)}`,
      icon: MapPin,
      color: "group-hover:text-rose-400",
      bgAccent: "bg-rose-500/10",
      borderAccent: "group-hover:border-rose-500/30",
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans relative overflow-x-hidden flex flex-col items-center py-12 px-4 sm:px-6">
      
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-amber-900/10 blur-[120px]" />
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }} 
        />
      </div>

      <div className="w-full max-w-lg z-10 flex flex-col items-center animate-fade-up">
        
        {/* Profile Card Header */}
        <div className="w-full relative bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/[0.05] rounded-3xl p-8 pb-10 mb-6 shadow-2xl flex flex-col items-center">
          
          {/* Share Button */}
          <button 
            onClick={handleShare}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/5 text-white/70 hover:text-white cursor-pointer"
            aria-label="Share profile"
          >
            {copied ? <Check size={18} className="text-green-400" /> : <Share2 size={18} />}
          </button>

          {/* Avatar Container */}
          <div className="relative group mb-6">
            {/* Animated Glow */}
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-b from-orange-500 to-amber-600 opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-md" />
            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-b from-orange-500/50 to-amber-600/30 z-0" />
            
            <div className="relative w-32 h-32 rounded-full flex items-center justify-center border-4 border-[#0A0A0A] z-10 bg-gradient-to-br from-[#111] to-[#000] text-4xl font-bold tracking-tighter overflow-hidden">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 select-none">
                {getInitials(employee.name)}
              </span>
              
              {/* Subtle inner shadow/shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Identity */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white/95 leading-tight">
              {employee.name}
            </h1>
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-sm font-medium tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300">
                {employee.title}
              </span>
              <span className="text-white/40 text-sm font-light">
                Black Unique Diamond
              </span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="w-full space-y-3">
          {links.map((link, idx) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
                style={{ 
                  animationDelay: `${idx * 100}ms`,
                  animationFillMode: 'both' 
                }}
              >
                <div className={`
                  relative overflow-hidden
                  flex items-center p-4 rounded-2xl
                  bg-[#0A0A0A]/60 hover:bg-[#111111] backdrop-blur-md
                  border border-white/[0.03] ${link.borderAccent}
                  transition-all duration-300 ease-out
                  hover:shadow-xl
                `}>
                  {/* Subtle hover background sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon Box */}
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center
                    ${link.bgAccent} border border-white/5
                    transition-transform duration-300
                  `}>
                    <Icon className={`w-5 h-5 text-white/60 ${link.color} transition-colors duration-300`} />
                  </div>
                  
                  {/* Text */}
                  <div className="ml-4 flex-1">
                    <h2 className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">
                      {link.label}
                    </h2>
                    <p className="text-[13px] text-white/40 font-light mt-0.5">
                      {link.subtitle}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center pb-8 animate-fade-in" style={{ animationDelay: "800ms" }}>
          <div className="w-12 h-[1px] bg-white/10 mx-auto mb-4" />
          <p className="text-[11px] font-medium tracking-[0.2em] text-white/30 uppercase">
            © {new Date().getFullYear()} Black Unique Diamond
          </p>
        </footer>
      </div>
    </main>
  );
}
