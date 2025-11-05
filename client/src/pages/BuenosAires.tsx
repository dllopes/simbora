import { DestinationMenu } from "@/components/DestinationMenu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, ThumbsDown, ThumbsUp } from "lucide-react";

export default function BuenosAires() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="container py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Buenos Aires – Pesquisa de Hospedagem
          </h1>
          <p className="text-sm text-slate-600 max-w-3xl">
            Pacote com hotel e voos analisado para o réveillon 2025 ⇄ 2026. Abaixo você encontra o
            resumo completo da melhor opção identificada até o momento.
          </p>
          <DestinationMenu className="mt-6" />
        </div>
      </header>

      <main className="container py-10 space-y-10">
        <section className="text-center max-w-2xl mx-auto text-sm text-slate-600">
          <p className="mb-2">
            <strong>Resumo rápido:</strong> Pacote Latam com 5 noites no Up Central Córdoba, em Retiro,
            oferece melhor custo-benefício (R$ 2.976 por pessoa). Hospedagem isolada segue disponível,
            mas exige compra separada de voos.
          </p>
          <p className="text-indigo-600 font-semibold">
            Última verificação de disponibilidade: 04/11/2025 — restam poucos pacotes!
          </p>
        </section>

        <section>
          <Card className="border-2 border-indigo-200 shadow-lg">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2 flex items-center gap-2 flex-wrap">
                    Up Central Córdoba
                    <Badge variant="default" className="bg-indigo-500 hover:bg-indigo-600">
                      DISPONÍVEL
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">
                      INTERNACIONAL
                    </Badge>
                  </CardTitle>
                  <CardDescription className="flex items-start gap-2 text-base">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>San Martin 1019/21, Retiro, Buenos Aires, Argentina</span>
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
                    <span className="font-semibold">Avaliação: 8.4 - Muito Bom</span>
                    <span className="text-slate-400">|</span>
                    <span>Localização: 9.2 - Excelente</span>
                  </div>
                </div>
                <Badge variant="outline" className="text-sm px-3 py-1">
                  Hotel 3★
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-3 px-2 font-semibold text-slate-700">Opção</th>
                      <th className="text-right py-3 px-2 font-semibold text-slate-700">Total (4 pessoas)</th>
                      <th className="text-right py-3 px-2 font-semibold text-slate-700">Por pessoa</th>
                      <th className="text-left py-3 px-2 font-semibold text-slate-700">Inclui</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-2 border-emerald-400 bg-emerald-50 hover:bg-emerald-100">
                      <td className="py-3 px-2 font-semibold text-emerald-800">✈️ Pacote completo (recomendado)</td>
                      <td className="py-3 px-2 text-right font-bold text-emerald-700 text-base">R$ 11.904</td>
                      <td className="py-3 px-2 text-right font-bold text-emerald-700 text-base">R$ 2.976</td>
                      <td className="py-3 px-2 text-xs space-y-1">
                        <div>✅ Voos ida e volta MCZ ⇄ BUE (com paradas)</div>
                        <div>✅ 5 noites no hotel (2 quartos)</div>
                        <div>✅ Reserva flexível</div>
                        <div className="text-emerald-700 font-semibold">💰 Economia de ~R$ 690</div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="py-3 px-2 font-medium">🏨 Apenas hospedagem</td>
                      <td className="py-3 px-2 text-right">R$ 3.400</td>
                      <td className="py-3 px-2 text-right">R$ 850</td>
                      <td className="py-3 px-2 text-xs space-y-1">
                        <div>✅ 5 noites (2 quartos Standard Double)</div>
                        <div>✅ Cancelamento grátis até 28/12</div>
                        <div>⚠️ Voos por conta própria</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-indigo-50 border-2 border-emerald-300 rounded-lg p-4">
                <h3 className="font-bold text-lg text-emerald-800 mb-2 flex items-center gap-2">
                  <span>🎉</span>
                  Melhor escolha: pacote voo + hotel
                </h3>
                <div className="text-sm text-slate-700 space-y-2">
                  <p><strong>Voos:</strong> Maceió (MCZ) ⇄ Buenos Aires (BUE) com paradas | Datas: 30/12 a 04/01</p>
                  <p><strong>Hotel:</strong> Up Central Córdoba — 2 quartos, 4 pessoas, 5 noites</p>
                  <p><strong>Vantagem:</strong> R$ 2.976 por pessoa comprando o pacote; compra separada aumenta o total.</p>
                  <p className="text-xs text-slate-600 italic">Dados checados em 04/11/2025. Apenas 5 pacotes disponíveis.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <ThumbsUp className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-slate-700 mb-1">Pontos positivos</p>
                    <p className="text-sm text-slate-600">
                      Pacote completo com ótimo custo-benefício, localização excelente (9.2), quartos confortáveis,
                      Wi-Fi de alta avaliação (9.4) e equipe atenciosa. Café e chá liberados 24h.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ThumbsDown className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-slate-700 mb-1">Pontos de atenção</p>
                    <p className="text-sm text-slate-600">
                      Quartos compactos e alguns sem ar-condicionado, café da manhã não incluso, late check-out pode ser caro.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-sm text-slate-700 mb-2">Comodidades principais</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-600">
                  <div>✅ Wi-Fi gratuito (9.4)</div>
                  <div>✅ Estacionamento privado</div>
                  <div>✅ Transfer aeroporto</div>
                  <div>✅ Recepção 24h</div>
                  <div>✅ Elevador</div>
                  <div>✅ Limpeza diária</div>
                  <div>✅ Aquecimento</div>
                  <div>✅ Quartos não fumantes</div>
                  <div>✅ Máquina de café/chá</div>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-semibold text-sm text-slate-700 mb-2">📍 Localização e distâncias</h3>
                <div className="grid md:grid-cols-2 gap-2 text-xs text-slate-600">
                  <div>• Florida Street: 800 m</div>
                  <div>• Teatro Colón: 900 m</div>
                  <div>• Obelisco: 1,1 km</div>
                  <div>• Plaza de Mayo: 1,8 km</div>
                  <div>• Aeroporto Jorge Newbery: 6 km</div>
                  <div>• Estação Retiro (metrô/trem) nas proximidades</div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
                <p className="text-sm font-semibold text-amber-800 mb-1">⚠️ Disponibilidade limitada</p>
                <p className="text-xs text-slate-700">
                  Apenas 4 quartos remanescentes para o período de réveillon. Cancelamento grátis até 28/12/2025.
                  Pagamento direto na propriedade (sem pré-pagamento).
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild className="gap-2">
                  <a
                    href="https://www.booking.com/hotel/ar/central-cordoba-buenos-aires.html?checkin=2025-12-30&checkout=2026-01-04&group_adults=4&no_rooms=2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Booking.com
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="gap-2">
                  <a
                    href="https://www.google.com/maps/place/Up+Central+C%C3%B3rdoba/@-34.5951,-58.3773,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Google Maps
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="text-center text-sm text-slate-500 py-8 border-t border-slate-200">
        <p>Documento atualizado em 04 de novembro de 2025.</p>
        <p>Reserva analisada com base em disponibilidade e preços encontrados em 04/11/2025.</p>
      </footer>
    </div>
  );
}
