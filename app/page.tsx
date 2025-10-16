import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Heart,
  Users,
  Shield,
  LucideBrush,
  LucidePalette,
  Waves,
  Dumbbell,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50 h-20 flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="#hero">
            <img
              src="./logo.png"
              alt="Logo"
              className="h-25 w-25 object-cover rounded-full"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Nos Services
            </Link>
            <Link
              href="#approach"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Notre philosophie
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Témoignages
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div>
              <a href="https://forms.gle/A1by9fweFw8xcDF96" target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Réserver une séance
          </Button>
          </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-balance leading-tight">
              Ma féminité respire
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Atelier féminin d’expression, de libération et de guérison Parce
              que tu as toujours été là pour les autres. Aujourd’hui est le jour
              qui t’est entièrement consacré.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="tel:+213659507399">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                En savoir plus
              </Button></a></div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-secondary">
              <img
                src="./meditation.jpg"
                alt="Peaceful meditation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">
              Nos Services
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Des approches personnalisées pour accompagner votre parcours de
              bien-être mental
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <LucideBrush className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-card-foreground">
                  Dessin Libératoire
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Exprimez vos émotions librement à travers les couleurs et les
                  formes, sans avoir besoin de parler. C’est un moment pour
                  laisser sortir ce qui est en vous.{" "}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <LucidePalette className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-card-foreground">
                  Coloriage de Mandala
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Une activité apaisante qui aide votre esprit à se calmer. En
                  coloriant, vous vous recentrez, vous respirez et vous
                  retrouvez de la sérénité.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-card-foreground">
                  Cercle de Partage
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Un espace sécurisé où vous pouvez vous exprimer librement et
                  vous relier à d’autres femmes qui vous comprennent.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Waves className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-card-foreground">
                  Danse Douce
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Des mouvements simples et intuitifs pour réveiller votre
                  énergie et relâcher les tensions. Vous bougez à votre rythme,
                  sans pression.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Dumbbell className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-card-foreground">
                  Exercices Corporels
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Des gestes légers qui détendent le corps et libèrent le stress
                  accumulé. Reconnectez vous à vous-même à travers le mouvement.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-card-foreground">
                  Méditation Guidée
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Un moment de pause intérieure pour vous recentrer, respirer et
                  retrouver votre équilibre mental et émotionnel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-secondary">
                <img
                  src="./place.jpg"
                  alt="Therapy space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">
                Notre philosophie
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                L’atelier “Cercle 369” offre un espace bienveillant dédié aux
                femmes qui ressentent le besoin de se recentrer, de libérer
                leurs émotions et de retrouver leur énergie intérieure. Nous
                combinons des pratiques créatives, corporelles et méditatives
                pour accompagner chaque participante vers plus d’équilibre, de
                douceur et d’écoute de soi.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Sécurité et confidentialité
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Votre confort et votre intimité sont nos priorités dans
                      chaque séance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Accompagnement bienveillant
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Une approche fondée sur l’écoute, la compassion et la
                      compréhension.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">
              Ce que partagent les femmes
            </h2>
            <p className="text-lg text-muted-foreground">
              Des voix réelles, des chemins de guérison
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="text-3xl text-primary">"</div>
                <p className="text-muted-foreground leading-relaxed italic">
                  Je ne réalisais pas à quel point j’avais besoin de respirer.
                  Cet espace m’a permis de me reconnecter à moi sans
                  culpabilité. J’en suis sortie légère, comme si j’avais posé un
                  poids que je portais depuis longtemps.
                </p>
                <div className="pt-4">
                  <div className="font-semibold text-foreground">Nadia M.</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="text-3xl text-primary">"</div>
                <p className="text-muted-foreground leading-relaxed italic">
                  C’est la première fois que je me sens comprise sans avoir à
                  justifier ce que je ressens. Le mélange entre art, mouvement
                  et partage m’a fait un bien énorme.
                </p>
                <div className="pt-4">
                  <div className="font-semibold text-foreground">Amel.</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="text-3xl text-primary">"</div>
                <p className="text-muted-foreground leading-relaxed italic">
                  Je suis maman et je travaille, je n’ai jamais de temps pour
                  moi. Pendant l’atelier, j’ai eu l’impression d’exister en
                  dehors des rôles que je porte tous les jours. Ça m’a fait du
                  bien de me retrouver.
                </p>
                <div className="pt-4">
                  <div className="font-semibold text-foreground">Zineb B.</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 bg-primary/5 rounded-3xl p-12 md:p-16 border border-primary/10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">
              Prêtez à commencer votre voyage intérieur ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
             Faites le premier pas vers une vie plus paisible et équilibrée. Envoyez dès maintenant “Je le mérite” par message ou inscrivez-vous en remplissant le formulaire ci-dessous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="https://forms.gle/A1by9fweFw8xcDF96" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Je m'inscris
              </Button></a>
              <a  href="https://wa.me/213659507399?text=Je%20le%20m%C3%A9rite"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button size="lg" variant="outline">
                Je le mérite : +213 659 50 73 99
              </Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <img src="./logo.png" alt="" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Services professionnels de méditation et d’accompagnement pour
                votre parcours de bien-être mental.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 ml-50">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground ml-50">
                <li>
                  <Link
                    href="#services"
                    className="hover:text-foreground transition-colors"
                  >
                    Dessin libératoire
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-foreground transition-colors"
                  >
                    Coloriage de mandala
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-foreground transition-colors"
                  >
                    Cercle de partage
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-foreground transition-colors"
                  >
                    Dance douce
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-foreground transition-colors"
                  >
                    Exercices corporels
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-foreground transition-colors"
                  >
                    Méditation guidée
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 ml-30">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground ml-30">               
                  <li>
                    <a
                      href="https://maps.app.goo.gl/Fmynn2ToFMqgzPw58"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:underline"
                    > Cercle 369 <br />
                      Dely Ibrahim, Alger
                    </a>
                  </li>
                
                  <li className="pt-2">
                    <a href="tel:+213659507399">+213 659 50 73 99</a>
                  </li>
                
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>
              © 2025 Cercle 369. All rights reserved. • Privacy Policy • Terms
              of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
