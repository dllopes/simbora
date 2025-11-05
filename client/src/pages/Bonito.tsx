import { DestinationMenu } from "@/components/DestinationMenu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";
import { Calendar, CreditCard, ExternalLink, MapPin, Users } from "lucide-react";

export default function Bonito() {
  const inclusoes = [
    "🐎 Passeio a cavalo",
    "🏃‍♂️ Trilha ecológica com cachoeira privativa (agendamento)",
    "🎣 Pesca esportiva",
    "💧 Cascata de águas naturais",
    "🏄 Caiaque e stand up paddle (agendamento)",
    "🐮 Leite no curral",
    "💦 Piscinas com tobogã",
    "🎶 Música ao vivo",
    "💥 Queima de fogos",
    "🥘 Ceia de Réveillon",
    "🍾 Espumante cortesia",
  ];

  const formasPagamento = [
    "Até 10x sem juros no valor total.",
    "À vista via PIX/transferência com 10% de desconto.",
    "50% via depósito para garantia + 50% no hotel em até 6x.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-emerald-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-200 sticky top-0 z-10 shadow-sm">
        <div className="container py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-2">
            Bonito (PE) – Réveillon Pedra do Rodeadouro
          </h1>
          <p className="text-sm text-emerald-700 max-w-3xl">
            Organização da viagem para o Réveillon 2025 na Fazenda Pedra do Rodeadouro. Detalhes do pacote
            recomendado, benefícios inclusos e opções de pagamento estão reunidos abaixo.
          </p>
          <DestinationMenu className="mt-6" />
        </div>
      </header>

      <main className="container py-12 space-y-8">
        <section className="text-center text-sm text-emerald-700 max-w-2xl mx-auto space-y-2">
          <p>
            <strong>Período:</strong> 30/12/2025 a 01/01/2026 (2 diárias).
          </p>
          <p>
            <strong>Hospedagem recomendada:</strong>{" "}
            <a
              className="underline decoration-dotted hover:text-emerald-900"
              href="https://www.instagram.com/fazendapedrarodeadouro?igsh=MWhvZ3RyMGJrMm50bQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazenda Pedra do Rodeadouro
            </a>
          </p>
          <p className="text-xs text-emerald-600">
            Valores informados sujeitos a alteração sem aviso prévio. Reservas confirmadas apenas após pagamento e
            agendamento com o hotel.
          </p>
        </section>

        <Card className="border-emerald-200 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl text-emerald-900 flex items-center gap-2 flex-wrap">
                  Apartamento Vista Pedra
                  <Badge variant="outline" className="border-emerald-400 text-emerald-700 bg-emerald-50">
                    Hotel recomendado
                  </Badge>
                </CardTitle>
                <CardDescription className="flex items-start gap-2 text-sm text-emerald-700">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Bonito – PE</span>
                </CardDescription>
              </div>
              <div className="flex gap-3 text-sm text-emerald-700">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  2 diárias
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Ideal para 2 pessoas
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 text-sm text-emerald-800">
            <div className="grid gap-4 md:grid-cols-[2fr,1fr] md:gap-8">
              <div className="space-y-3">
                <h3 className="font-semibold text-emerald-900">Configuração do quarto</h3>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Cama queen + camas single adicionais.</li>
                  <li>Ar-condicionado, smart TV de 40&quot;, frigobar e banheiro com ducha quente.</li>
                  <li>Varanda com rede e vista para a Pedra do Rodeadouro.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-emerald-700 font-semibold">Tarifa Réveillon 2025</p>
                <p className="text-3xl font-bold text-emerald-900 mt-1">R$ 3.278,00</p>
                <p className="text-xs text-emerald-600 mt-1">Apartamento duplo (2 adultos)</p>
                <p className="text-xs text-emerald-600 mt-2">
                  Crianças até 10 anos (duas) no quarto dos pais: cortesia. Terceira criança ou maiores de 10 anos:
                  tarifa adulto.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-emerald-200 bg-white p-4">
              <h3 className="font-semibold text-emerald-900 mb-2">Lazer e experiências incluídas</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {inclusoes.map((item) => (
                  <li key={item} className="text-emerald-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-emerald-200 bg-emerald-50/70">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-emerald-800">
                    <Info className="w-4 h-4" />
                    <CardTitle className="text-base font-semibold text-emerald-900">Informações gerais</CardTitle>
                  </div>
                  <CardDescription className="text-xs text-emerald-700">
                    Condições do pacote fornecidas pelo hotel. Sujeito a disponibilidade.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-emerald-800">
                  <p>🐕 Pets são aceitos sem custo adicional.</p>
                  <p>⏰ Check-in às 14h (almoço não incluso). Check-out às 12h.</p>
                  <p>🍴 Pensão completa: café da manhã, almoço e jantar.</p>
                  <p>📋 Tarifas flutuantes – valores podem mudar sem aviso.</p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-white/80">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-emerald-800">
                    <CreditCard className="w-4 h-4" />
                    <CardTitle className="text-base font-semibold text-emerald-900">Formas de pagamento</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-emerald-800">
                  <ul className="space-y-1 list-disc list-inside">
                    {formasPagamento.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="gap-2 border-emerald-300 text-emerald-800 hover:bg-emerald-100"
              >
                <a
                  href="https://www.instagram.com/fazendapedrarodeadouro?igsh=MWhvZ3RyMGJrMm50bQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Instagram oficial
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <section className="text-center text-xs text-emerald-600 max-w-3xl mx-auto">
          Obs.: orçamento fornecido pelo hotel não garante reserva. Efetive a reserva com pagamento + agendamento
          antecipado para assegurar disponibilidade.
        </section>
      </main>
    </div>
  );
}
