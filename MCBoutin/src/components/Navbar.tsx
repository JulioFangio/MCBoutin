import React, { useEffect, useState } from "react";

import {
  Menu,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
    { title: "Accueil", url: "#whoami" },
    {
      title: "Activités",
      url: "#activities",
    },
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
    <section className="fixed py-4 w-full bg-transparent z-50">
      <div className="max-w-screen-2xl mx-auto px-4">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8" alt={logo.alt} />
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item, activeSection))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="text-sm font-medium relative group inline-block">
            <button className="text-sm font-semibold text-black hover:text-[#f8c8d0] transition-colors">
              Me contacter
            </button>
            <div className="absolute right-0 top-full z-50 hidden w-max flex-col rounded-md bg-white p-3 shadow-md group-hover:flex text-gray-700">
              <span className="font-semibold">Tél : 06 12 34 56 78</span>
              <span className="font-semibold">Email : contact@monsite.com</span>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
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
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item, activeSection))}
                  </Accordion>

                  <div className="flex flex-col gap-2 rounded-md bg-gray-100 p-4 text-sm text-gray-800">
                    <div className="text-sm font-medium">Me contacter</div>
                    <div className="text-sm font-medium">
                      Tél: 06 12 34 56 78
                    </div>
                    <div className="text-sm font-medium">
                      Email: contact@monsite.com
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-2">
        <img
          src="/trait1_rose.png"
          alt="Ligne de séparation"
          style={{
            height: "10px",
            width: "auto",
            maxWidth: "auto",
          }}
        />
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem, activeSection: string) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="font-semibold">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} activeSection={activeSection} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  // is this item active ?
  const isActive = item.url === `#${activeSection}`;

  return (
    <NavigationMenuItem key={item.title}>
      <a
        href={item.url}
        className={`text-sm font-semibold px-2 transition-colors ${
          isActive ? "text-[#f8c8d0]" : "text-black hover:text-[#f8c8d0]"
        }`}
        style={{
          background: "transparent",
          border: "none",
          boxShadow: "none",
        }}
      >
        {item.title}
      </a>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, activeSection: string) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} activeSection={activeSection} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  const isActive = item.url === `#${activeSection}`;

  return (
    <a
      key={item.title}
      href={item.url}
      className={`text-md font-semibold px-2 transition-colors ${
        isActive ? "text-[#f8c8d0]" : "text-black hover:text-[#f8c8d0]"
      }`}
      style={{
        background: "transparent",
        border: "none",
        padding: 0,
      }}
    >
      {item.title}
    </a>
  );
};

const SubMenuLink = ({
  item,
  activeSection,
}: {
  item: MenuItem;
  activeSection?: string;
}) => {
  const isActive = item.url === `#${activeSection}`;

  return (
    <a
      className={`flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none ${
        isActive
          ? "bg-muted text-[#f8c8d0]"
          : "hover:bg-muted hover:text-accent-foreground text-foreground"
      }`}
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
