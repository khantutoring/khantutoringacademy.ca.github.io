import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calculator, Code, PenTool, Star, Clock, Award, Phone, Mail, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      {/* Header */}
      <header className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-accent" />
              <h1 className="text-2xl font-bold text-balance">Khan Tutoring Academy</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About
              </a>
              <a
                href="#services"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Services
              </a>
              <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Expert K-12 Tutoring Services</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Personalized learning solutions in math, science, English, coding, French, and more. Help your child excel
            academically with our experienced tutors.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-t border-primary-foreground/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/80">Students Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-primary-foreground/80">Grade Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-primary-foreground/80">Expert Tutors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-card-foreground text-balance">Our Tutoring Services</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive academic support across all grade levels and subjects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border/50 hover:border-accent/50 transition-colors">
              <CardHeader>
                <Calculator className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-card-foreground">Mathematics</CardTitle>
                <CardDescription>
                  From basic arithmetic to advanced calculus. Algebra, geometry, trigonometry, and statistics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">K-12</Badge>
                  <Badge variant="secondary">AP Math</Badge>
                  <Badge variant="secondary">SAT Prep</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-accent/50 transition-colors">
              <CardHeader>
                <PenTool className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-card-foreground">English & Writing</CardTitle>
                <CardDescription>
                  Reading comprehension, essay writing, grammar, literature analysis, and creative writing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Writing</Badge>
                  <Badge variant="secondary">Literature</Badge>
                  <Badge variant="secondary">Grammar</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-accent/50 transition-colors">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-card-foreground">Science - Chemistry</CardTitle>
                <CardDescription>
                  Organic and inorganic chemistry, chemical reactions, lab work support, and exam preparation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Organic</Badge>
                  <Badge variant="secondary">Inorganic</Badge>
                  <Badge variant="secondary">Lab Work</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-accent/50 transition-colors">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-card-foreground">Biology</CardTitle>
                <CardDescription>
                  Cell biology, genetics, ecology, human anatomy, and life science fundamentals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cell Biology</Badge>
                  <Badge variant="secondary">Genetics</Badge>
                  <Badge variant="secondary">Ecology</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-accent/50 transition-colors">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-card-foreground">Physics</CardTitle>
                <CardDescription>
                  Mechanics, thermodynamics, electromagnetism, waves, and modern physics concepts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Mechanics</Badge>
                  <Badge variant="secondary">Electromagnetism</Badge>
                  <Badge variant="secondary">Waves</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-accent/50 transition-colors">
              <CardHeader>
                <Code className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-card-foreground">Coding & Computer Science</CardTitle>
                <CardDescription>
                  Python, JavaScript, Java, web development, and computer science fundamentals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Web Dev</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-accent/50 transition-colors">
              <CardHeader>
                <Award className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-card-foreground">Math Contest</CardTitle>
                <CardDescription>
                  Preparation for math competitions including AMC, AIME, and local math contests.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AMC</Badge>
                  <Badge variant="secondary">AIME</Badge>
                  <Badge variant="secondary">Competitions</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-accent/50 transition-colors">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-card-foreground">Course Selection</CardTitle>
                <CardDescription>
                  Guidance on choosing the right courses for academic goals and university preparation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Academic Planning</Badge>
                  <Badge variant="secondary">Prerequisites</Badge>
                  <Badge variant="secondary">Guidance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-accent/50 transition-colors">
              <CardHeader>
                <Star className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-card-foreground">University Admission Support</CardTitle>
                <CardDescription>
                  Application assistance, essay writing, interview preparation, and scholarship guidance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Applications</Badge>
                  <Badge variant="secondary">Essays</Badge>
                  <Badge variant="secondary">Scholarships</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-balance">Why Choose Khan Tutoring Academy?</h3>
              <p className="text-lg text-primary-foreground/80 mb-8 text-pretty">
                We believe every student has the potential to excel. Our personalized approach, experienced tutors, and
                proven methods help students build confidence and achieve academic success.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Star className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Personalized Learning Plans</h4>
                    <p className="text-primary-foreground/80">
                      Customized curriculum based on each student's learning style and goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Flexible Scheduling</h4>
                    <p className="text-primary-foreground/80">
                      Online and in-person sessions that fit your family's busy schedule.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Qualified Tutors</h4>
                    <p className="text-primary-foreground/80">
                      Experienced educators with advanced degrees and teaching certifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/school-aged-children-in-classroom-learning.jpg"
                alt="School-aged children learning in classroom"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-balance text-card-foreground">Get In Touch</h3>
            <p className="text-xl text-muted-foreground text-pretty">
              Ready to help your child succeed? Contact us today to learn more about our tutoring services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
            <Card className="border-border/50">
              <CardHeader className="text-center">
                <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-card-foreground">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-semibold text-card-foreground">647-717-6207</p>
                <p className="text-muted-foreground mt-2">Available for calls and inquiries</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader className="text-center">
                <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-card-foreground">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold text-card-foreground">khantutoring.ca@gmail.com</p>
                <p className="text-muted-foreground mt-2">We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-card-foreground">Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold text-card-foreground">Scarborough, ON</p>
                <p className="text-muted-foreground mt-2">Serving the Greater Toronto Area</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary-foreground/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6 text-accent" />
                <span className="font-bold">Khan Tutoring Academy</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Empowering students to achieve academic excellence through personalized tutoring and support.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Mathematics</li>
                <li>English & Writing</li>
                <li>Science - Chemistry</li>
                <li>Biology</li>
                <li>Physics</li>
                <li>Coding & Computer Science</li>
                <li>Math Contest</li>
                <li>Course Selection</li>
                <li>University Admission Support</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>647-717-6207</li>
                <li>khantutoring.ca@gmail.com</li>
                <li>Scarborough, ON</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2025 Khan Tutoring Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
