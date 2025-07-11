import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
}

const Navbar1 = ({
  logo = {
    url: "#",
    src: "/logo_mariechristineBOUTIN.png",
    alt: "logo",
    title: "Marie - Christine Boutin",
  },
  menu = [
    { title: "Accueil", url: "#acceuil" },
    { title: "Activités", url: "#activities" },
    { title: "Avis", url: "#avis" },
    { title: "Me contacter", url: "#contact" },
  ],
}: Navbar1Props) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section className="fixed py-4 w-full bg-white/5 backdrop-blur-[0.5px] z-50">
      <div className="max-w-screen-2xl mx-auto px-4">
        {/* Desktop Navigation */}
        <nav className="hidden justify-center lg:flex">
          <div className="flex items-center justify-center w-full">
            {/* Logo à gauche */}
            <div className="absolute left-4 flex items-center gap-2">
              <a href={logo.url} className="flex items-center gap-2">
                <img src={logo.src} className="max-h-8" alt={logo.alt} />
                <span className="text-lg font-semibold tracking-tighter">
                  {logo.title}
                </span>
              </a>
            </div>
            
            {/* Menu centré */}
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item, activeSection))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8" alt={logo.alt} />
              <span className="text-lg font-medium tracking-tighter">
                {logo.title}
              </span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  {menu.map((item) => (
                    <a
                      key={item.title}
                      href={item.url}
                      className="text-md font-semibold text-black hover:text-[#f8c8d0]"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Ligne décorative */}
      <div className="w-full flex justify-center mt-2">
        <img
          src="/trait1_rose.png"
          alt="Ligne de séparation"
          style={{ height: "10px", width: "auto", maxWidth: "auto" }}
        />
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem, activeSection: string) => {
  const isActive = item.url === `#${activeSection}`;

  return (
    <NavigationMenuItem key={item.title}>
      <a
        href={item.url}
        className={`text-base font-semibold px-6 py-2 transition-colors ${
          isActive ? "text-[#f8c8d0]" : "text-black hover:text-[#f8c8d0]"
        }`}
      >
        {item.title}
      </a>
    </NavigationMenuItem>
  );
};

export { Navbar1 };
