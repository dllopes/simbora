import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, ThumbsUp, ThumbsDown, ExternalLink, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type HospedagemLink = {
  nome: string;
  url: string;
  icon?: "phone";
};

type HospedagemOpcao = {
  tipo: string;
  total: string;
  porPessoa: string;
  diaria: string;
  caracteristicas?: string;
};

type Hospedagem = {
  nome: string;
  localizacao: string;
  distancia: string;
  opcoes: HospedagemOpcao[];
  pontosPositivos: string;
  pontosNegativos: string;
  links: HospedagemLink[];
  destaque?: boolean;
  categoria: "original" | "nova" | "internacional";
  badge?: string;
  indisponivel?: boolean;
  foraOrcamento?: boolean;
  contato?: string;
};

export default function Home() {
  const hospedagensOriginais: Hospedagem[] = [
    {
      nome: "Pousada Entre Montanhas",
      localizacao: "Rua da Harmonia, ~5 min da vila (carro ou a pé)",
      distancia: "~5 min",
      opcoes: [
        { tipo: "Simples", total: "R$ 2.050,00", porPessoa: "R$ 1.025,00", diaria: "R$ 205,00", caracteristicas: "Ventilador, Wi-Fi, Frigobar" },
        { tipo: "Padrão", total: "R$ 2.700,00", porPessoa: "R$ 1.350,00", diaria: "R$ 270,00", caracteristicas: "Ar Condicionado, Wi-Fi, Frigobar" },
        { tipo: "Especial", total: "R$ 3.650,00", porPessoa: "R$ 1.825,00", diaria: "R$ 365,00", caracteristicas: "Banheira de Hidromassagem, Ar Condicionado, Wi-Fi, Frigobar" }
      ],
      pontosPositivos: "Estruturada e confortável",
      pontosNegativos: "Mais distante da vila (~5 min)",
      links: [
        { nome: "Instagram", url: "https://www.instagram.com/entremontanhas_?igsh=MWtpYTRzMTlqNzE1dA==" },
        { nome: "Booking.com", url: "https://www.booking.com/Share-Yl8mP0" }
      ],
      destaque: false,
      categoria: "original"
    },
    {
      nome: "Chalés da Villa",
      localizacao: "Cerca de 200 m da vila, rua do coreto",
      distancia: "~200 m",
      opcoes: [
        { tipo: "Chalé Simples", total: "R$ 1.950,00", porPessoa: "R$ 975,00", diaria: "R$ 195,00", caracteristicas: "" },
        { tipo: "Chalé com Varanda", total: "R$ 2.500,00", porPessoa: "R$ 1.250,00", diaria: "R$ 250,00", caracteristicas: "" }
      ],
      pontosPositivos: "Próximo da vila (favorita do grupo) e bom custo-benefício",
      pontosNegativos: "Estrutura mais simples",
      links: [
        { nome: "Booking.com", url: "https://www.booking.com/Share-IysU9BA" }
      ],
      destaque: true,
      categoria: "original"
    },
    {
      nome: "Pousada Villa Flor",
      localizacao: "Rua do Gorgulho, 200 a 300 m da vila",
      distancia: "200-300 m",
      opcoes: [
        { tipo: "Apartamento Standard", total: "R$ 4.250,00", porPessoa: "R$ 2.125,00", diaria: "R$ 425,00", caracteristicas: "" },
        { tipo: "Apartamento Deluxe", total: "R$ 4.625,00", porPessoa: "R$ 2.312,00", diaria: "R$ 462,00", caracteristicas: "" },
        { tipo: "Chalé", total: "R$ 5.125,00", porPessoa: "R$ 2.562,00", diaria: "R$ 512,00", caracteristicas: "" },
        { tipo: "Chalé Superior", total: "R$ 5.750,00", porPessoa: "R$ 2.875,00", diaria: "R$ 575,00", caracteristicas: "" }
      ],
      pontosPositivos: "Premium, confortável e próxima da vila",
      pontosNegativos: "Valor mais alto",
      links: [
        { nome: "Instagram", url: "https://www.instagram.com/reel/DFTzX3MxkQ9/?igsh=MW9laTJjeXZhYjc2YQ==" }
      ],
      destaque: false,
      categoria: "original"
    },
    {
      nome: "Casa dos Gatos",
      localizacao: "~500 m da vila",
      distancia: "~500 m",
      opcoes: [
        { tipo: "Casa completa", total: "R$ 1.750,00", porPessoa: "R$ 875,00", diaria: "R$ 175,00", caracteristicas: "2 quartos / 1 banheiro" }
      ],
      pontosPositivos: "Econômica e prática",
      pontosNegativos: "1 banheiro compartilhado. Estrutura considerada 'fraquinha'",
      links: [
        { nome: "Booking.com", url: "https://www.booking.com/Share-mJ7yhh" }
      ],
      destaque: false,
      categoria: "original"
    }
  ];

  const novasHospedagens: Hospedagem[] = [
    {
      nome: "Pousada Casa de Nomades",
      localizacao: "Centro de Vale do Capão",
      distancia: "Centro",
      opcoes: [
        { tipo: "Quarto Quádruplo Standard", total: "R$ 5.625,00", porPessoa: "R$ 1.406,25", diaria: "R$ 281,25", caracteristicas: "WiFi grátis, banheiro privativo, terraço, varanda, vista da cidade" }
      ],
      pontosPositivos: "Disponível para réveillon (confirmado), localização central, boa estrutura",
      pontosNegativos: "FORA DO ORÇAMENTO - Preço real de réveillon: R$ 1.406/pessoa (vs R$ 800 orçado)",
      links: [
        { nome: "Booking.com", url: "https://www.booking.com/hotel/br/pousada-casa-de-nomades.pt-br.html" }
      ],
      destaque: false,
      categoria: "nova",
      foraOrcamento: true
    },
    {
      nome: "Casa da Trilha",
      localizacao: "Rua dos Brancos, Vale do Capão - 1,3 km do centro da vila",
      distancia: "~10 min andando",
      opcoes: [
        { tipo: "Quarto Quádruplo com Banheiro Privativo", total: "R$ 3.500,00", porPessoa: "R$ 875,00", diaria: "R$ 175,00", caracteristicas: "1 quarto para 4 pessoas, 2 camas de solteiro, banheiro privativo, cancelamento grátis até 16/12" }
      ],
      pontosPositivos: "DISPONÍVEL para réveillon! Preço real confirmado (R$ 875/pessoa), localização próxima (1,3 km / 10 min andando), avaliação 8.7, cancelamento grátis até 16/12, totalmente reembolsável",
      pontosNegativos: "Levemente acima do orçamento (R$ 875 vs R$ 800). Quarto quádruplo (4 pessoas no mesmo quarto). Disponibilidade limitada (resta apenas 1). RESERVAR URGENTE!",
      links: [
        { nome: "Booking.com", url: "https://www.booking.com/hotel/br/casa-da-trilha.pt-br.html?checkin=2025-12-30&checkout=2026-01-04&group_adults=4&no_rooms=1" }
      ],
      destaque: true,
      categoria: "nova",
      badge: "Única Disponível"
    },
    {
      nome: "Pousada e Hostel Pé no Mato",
      localizacao: "150 metros da Vila do Capão",
      distancia: "150 m",
      opcoes: [
        { tipo: "Quarto", total: "R$ 1.026,25", porPessoa: "R$ 513,13", diaria: "R$ 102,63", caracteristicas: "Vista para montanhas" }
      ],
      pontosPositivos: "Muito próxima da vila (150m), vista linda",
      pontosNegativos: "SEM DISPONIBILIDADE - Página removida do Booking.com para réveillon",
      links: [
        { nome: "Booking.com", url: "https://www.booking.com/hotel/br/pousada-e-hostel-pe-no-mato.pt-br.html" }
      ],
      destaque: false,
      categoria: "nova",
      indisponivel: true
    }
  ];

  const todasHospedagens: Hospedagem[] = [...novasHospedagens, ...hospedagensOriginais];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Resumo de Hospedagens - Chapadinhos
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span><strong>Período:</strong> 30/12/2025 a 04/01/2026 (5 diárias)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span><strong>Total:</strong> 4 pessoas (2 casais - 1 quarto por casal)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <p className="text-gray-700 mb-2 text-center max-w-3xl mx-auto">
          Este documento consolida as informações das hospedagens discutidas, organizando-as para facilitar a comparação e o compartilhamento.
        </p>
        
        {/* Menu de Navegação com Abas */}
        <Tabs defaultValue="vale-capao" className="w-full mb-8">
          <div className="flex justify-center mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-auto p-1">
              <TabsTrigger value="vale-capao" className="text-base py-3 data-[state=active]:bg-green-600 data-[state=active]:text-white">
                <span className="mr-2">🏞️</span>
                Vale do Capão
              </TabsTrigger>
              <TabsTrigger value="buenos-aires" className="text-base py-3 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                <span className="mr-2">✈️</span>
                Buenos Aires
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Conteúdo: Vale do Capão */}
          <TabsContent value="vale-capao" className="mt-0">
        
        <div className="text-sm text-gray-600 mb-8 text-center max-w-3xl mx-auto space-y-3">
          <p className="italic">
            ⚠️ Atenção: Preços de réveillon podem variar. Recomenda-se contato direto para confirmar valores e disponibilidade.
          </p>
          <div className="bg-red-50 border border-red-200 rounded px-4 py-3 inline-block text-left">
            <p className="text-xs font-semibold mb-2">❌ Hospedagens SEM disponibilidade (verificado em 04/11/2025):</p>
            <ul className="text-xs space-y-1 list-disc list-inside">
              <li><strong>Pousada Aconchego</strong> - Sem disponibilidade via site oficial</li>
              <li><strong>Pousada Pico Da Vila</strong> - Sem disponibilidade no Booking.com</li>
              <li><strong>Chalés Vila Bela</strong> - Lotado no Vale do Capão (só em Palmeiras, 23km)</li>
              <li><strong>Pousada e Hostel Pé no Mato</strong> - Página removida do Booking.com</li>
              <li><strong>Pousada Entre Montanhas</strong> - Página removida do Booking.com</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded px-4 py-3 inline-block text-left mt-3">
            <p className="text-xs font-semibold mb-2">✅ Hospedagem DISPONÍVEL no Booking.com:</p>
            <p className="text-xs"><strong>Casa da Trilha</strong> - R$ 875/pessoa (levemente acima do orçamento) ⚠️ Disponibilidade limitada!</p>
          </div>
          <p className="text-xs bg-yellow-50 border border-yellow-300 rounded px-3 py-2 inline-block">
            📍 <strong>Dica:</strong> Booking.com tem pouca disponibilidade para réveillon. Priorize contato direto via WhatsApp!
          </p>
        </div>

        {/* Novas Hospedagens Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
            <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
              <span className="text-3xl">✨</span>
              Novas Opções Encontradas
              <span className="text-3xl">✨</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
          </div>
          
          <div className="grid gap-6">
            {novasHospedagens.map((hospedagem: Hospedagem, index) => (
              <Card key={index} className={`${hospedagem.destaque ? 'border-2 border-green-500 shadow-lg' : 'border-gray-200'} hover:shadow-xl transition-shadow`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2 flex-wrap">
                        {hospedagem.nome}
                        {hospedagem.badge && (
                          <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                            {hospedagem.badge}
                          </Badge>
                        )}
                        {hospedagem.indisponivel && (
                          <Badge variant="destructive" className="bg-red-500">
                            SEM DISPONIBILIDADE
                          </Badge>
                        )}
                        {hospedagem.foraOrcamento && (
                          <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-300">
                            FORA DO ORÇAMENTO
                          </Badge>
                        )}
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                          NOVA
                        </Badge>
                      </CardTitle>
                      <CardDescription className="flex items-start gap-2 text-base">
                        <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span>{hospedagem.localizacao}</span>
                      </CardDescription>
                      {hospedagem.contato && (
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                          <Phone className="w-4 h-4" />
                          <span>{hospedagem.contato}</span>
                        </div>
                      )}
                    </div>
                    <Badge variant="outline" className="text-sm px-3 py-1">
                      {hospedagem.distancia}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Tabela de Opções */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-3 px-2 font-semibold text-gray-700">Tipo</th>
                          <th className="text-right py-3 px-2 font-semibold text-gray-700">Total (Quarto)</th>
                          <th className="text-right py-3 px-2 font-semibold text-gray-700">Por Pessoa (5 noites)</th>
                          <th className="text-right py-3 px-2 font-semibold text-gray-700">Por Pessoa / Diária</th>
                          {hospedagem.opcoes.some(o => o.caracteristicas) && (
                            <th className="text-left py-3 px-2 font-semibold text-gray-700">Características</th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {hospedagem.opcoes.map((opcao, idx) => (
                          <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-2 font-medium">{opcao.tipo}</td>
                            <td className="py-3 px-2 text-right font-semibold text-green-600">{opcao.total}</td>
                            <td className="py-3 px-2 text-right">{opcao.porPessoa}</td>
                            <td className="py-3 px-2 text-right">{opcao.diaria}</td>
                            {hospedagem.opcoes.some(o => o.caracteristicas) && (
                              <td className="py-3 px-2 text-gray-600 text-xs">{opcao.caracteristicas}</td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pontos Positivos e Negativos */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                      <ThumbsUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm text-gray-700 mb-1">Pontos Positivos</p>
                        <p className="text-sm text-gray-600">{hospedagem.pontosPositivos}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <ThumbsDown className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm text-gray-700 mb-1">Pontos Negativos</p>
                        <p className="text-sm text-gray-600">{hospedagem.pontosNegativos}</p>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2">
                    {hospedagem.links.map((link, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        size="sm"
                        asChild
                        className="gap-2"
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.icon === "phone" ? <Phone className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                          {link.nome}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Opções Originais Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            <h2 className="text-2xl font-bold text-blue-700">
              Opções Discutidas Anteriormente
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          </div>

          <div className="grid gap-6">
            {hospedagensOriginais.map((hospedagem: Hospedagem, index) => (
              <Card key={index} className={`${hospedagem.destaque ? 'border-2 border-blue-500 shadow-lg' : 'border-gray-200'} hover:shadow-xl transition-shadow`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        {hospedagem.nome}
                        {hospedagem.destaque && (
                          <Badge variant="default" className="bg-blue-500 hover:bg-blue-600">
                            Favorita do Grupo
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="flex items-start gap-2 text-base">
                        <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span>{hospedagem.localizacao}</span>
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-sm px-3 py-1">
                      {hospedagem.distancia}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Tabela de Opções */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-3 px-2 font-semibold text-gray-700">Tipo</th>
                          <th className="text-right py-3 px-2 font-semibold text-gray-700">Total (Quarto)</th>
                          <th className="text-right py-3 px-2 font-semibold text-gray-700">Por Pessoa (5 noites)</th>
                          <th className="text-right py-3 px-2 font-semibold text-gray-700">Por Pessoa / Diária</th>
                          {hospedagem.opcoes.some(o => o.caracteristicas) && (
                            <th className="text-left py-3 px-2 font-semibold text-gray-700">Características</th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {hospedagem.opcoes.map((opcao, idx) => (
                          <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-2 font-medium">{opcao.tipo}</td>
                            <td className="py-3 px-2 text-right font-semibold text-blue-600">{opcao.total}</td>
                            <td className="py-3 px-2 text-right">{opcao.porPessoa}</td>
                            <td className="py-3 px-2 text-right">{opcao.diaria}</td>
                            {hospedagem.opcoes.some(o => o.caracteristicas) && (
                              <td className="py-3 px-2 text-gray-600 text-xs">{opcao.caracteristicas}</td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pontos Positivos e Negativos */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                      <ThumbsUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm text-gray-700 mb-1">Pontos Positivos</p>
                        <p className="text-sm text-gray-600">{hospedagem.pontosPositivos}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <ThumbsDown className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm text-gray-700 mb-1">Pontos Negativos</p>
                        <p className="text-sm text-gray-600">{hospedagem.pontosNegativos}</p>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2">
                    {hospedagem.links.map((link, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        size="sm"
                        asChild
                        className="gap-2"
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          {link.nome}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tabela Comparativa Geral */}
        <Card className="mb-12 border-2 border-purple-200 bg-purple-50/30">
          <CardHeader>
            <CardTitle className="text-2xl">Comparativo Geral - Todas as Opções</CardTitle>
            <CardDescription>Resumo completo para facilitar a decisão final</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-purple-300">
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Hospedagem</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Localização</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-700">Custo (Por Pessoa / 5 noites)</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">Destaque</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Opção DISPONÍVEL */}
                  <tr className="border-b-2 border-green-400 bg-green-50 hover:bg-green-100">
                    <td className="py-3 px-2 font-semibold text-green-800">✅ Casa da Trilha</td>
                    <td className="py-3 px-2">1,3 km (~10 min)</td>
                    <td className="py-3 px-2 text-right font-semibold text-green-700">R$ 875,00</td>
                    <td className="py-3 px-2 text-sm font-semibold text-green-800">Única DISPONÍVEL no Booking! Quarto quádruplo</td>
                  </tr>

                  {/* Opções ORIGINAIS (verificar disponibilidade via contato direto) */}
                  <tr className="border-b border-purple-100 hover:bg-purple-50">
                    <td className="py-3 px-2 font-semibold">Casa dos Gatos</td>
                    <td className="py-3 px-2">~500 m</td>
                    <td className="py-3 px-2 text-right font-semibold text-green-700">R$ 875,00</td>
                    <td className="py-3 px-2 text-sm">Econômica, 1 banheiro compartilhado</td>
                  </tr>
                  <tr className="border-b border-purple-100 hover:bg-purple-50">
                    <td className="py-3 px-2 font-semibold">Chalés da Villa</td>
                    <td className="py-3 px-2">~200 m</td>
                    <td className="py-3 px-2 text-right font-semibold text-blue-700">R$ 975,00 a R$ 1.250,00</td>
                    <td className="py-3 px-2 text-sm">Favorita do grupo, boa localização</td>
                  </tr>
                  <tr className="border-b border-purple-100 hover:bg-purple-50">
                    <td className="py-3 px-2 font-semibold">Pousada Entre Montanhas</td>
                    <td className="py-3 px-2">~5 min</td>
                    <td className="py-3 px-2 text-right font-semibold text-blue-700">R$ 1.025,00 a R$ 1.825,00</td>
                    <td className="py-3 px-2 text-sm">Estruturada, mais distante</td>
                  </tr>
                  <tr className="border-b border-purple-100 hover:bg-purple-50">
                    <td className="py-3 px-2 font-semibold">Pousada Villa Flor</td>
                    <td className="py-3 px-2">200-300 m</td>
                    <td className="py-3 px-2 text-right font-semibold text-red-700">R$ 2.125,00 a R$ 2.875,00</td>
                    <td className="py-3 px-2 text-sm">Premium, valor mais alto</td>
                  </tr>

                  {/* Opção FORA DO ORÇAMENTO */}
                  <tr className="border-b border-orange-200 bg-orange-50/50 hover:bg-orange-100">
                    <td className="py-3 px-2 font-semibold text-orange-800">💰 Pousada Casa de Nomades</td>
                    <td className="py-3 px-2">Centro</td>
                    <td className="py-3 px-2 text-right font-semibold text-red-700">R$ 1.406,25</td>
                    <td className="py-3 px-2 text-sm text-orange-800">Disponível mas FORA DO ORÇAMENTO</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Recomendações Atualizadas</h3>
              
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded border border-green-300">
                  <p className="font-semibold text-green-800 mb-1">✅ Única Opção Disponível no Booking.com:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Casa da Trilha</strong> - R$ 875/pessoa (levemente acima do orçamento de R$ 800) com disponibilidade confirmada para réveillon. Quarto quádruplo (4 pessoas no mesmo quarto). Avaliação 8.7 (Excelente), cancelamento grátis até 16/12, totalmente reembolsável. <span className="text-red-600 font-semibold">⚠️ Disponibilidade limitada - resta apenas 1 quarto!</span>
                  </p>
                </div>

                <div className="p-3 bg-red-50 rounded border border-red-300">
                  <p className="font-semibold text-red-800 mb-1">❌ Hospedagens Verificadas SEM Disponibilidade:</p>
                  <p className="text-sm text-gray-700">
                    Pousada Aconchego, Pousada Pico Da Vila, Chalés Vila Bela, Pousada e Hostel Pé no Mato e Pousada Entre Montanhas não têm disponibilidade no Booking.com para réveillon.
                  </p>
                </div>

                <div className="p-3 bg-orange-50 rounded border border-orange-300">
                  <p className="font-semibold text-orange-800 mb-1">💰 Fora do Orçamento:</p>
                  <p className="text-sm text-gray-700">
                    <strong>Pousada Casa de Nomades</strong> tem disponibilidade, mas o preço real de réveillon é <strong>R$ 1.406/pessoa</strong> (vs R$ 800 orçado).
                  </p>
                </div>

                <div className="p-3 bg-yellow-50 rounded border border-yellow-300">
                  <p className="font-semibold text-yellow-800 mb-1">📍 Recomendação Final:</p>
                  <p className="text-sm text-gray-700">
                    Entre em contato direto (WhatsApp/telefone) com as <strong>opções originais</strong> (Pousada Entre Montanhas, Chalés da Villa, Pousada Villa Flor, Casa dos Gatos), pois elas podem ter disponibilidade fora do Booking.com. Se não houver, a <strong>Casa da Trilha</strong> é a melhor opção confirmada!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

          </TabsContent>

          {/* Conteúdo: Buenos Aires */}
          <TabsContent value="buenos-aires" className="mt-0">
        
        <div className="mb-12">

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
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                    <span className="font-semibold">Avaliação: 8.4 - Muito Bom</span>
                    <span className="text-gray-400">|</span>
                    <span>Localização: 9.2 - Excelente</span>
                  </div>
                </div>
                <Badge variant="outline" className="text-sm px-3 py-1">
                  Hotel 3★
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Tabela de Opções */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-700">Opção</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">Total (4 pessoas)</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">Por Pessoa</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-700">Inclui</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-2 border-green-400 bg-green-50 hover:bg-green-100">
                      <td className="py-3 px-2 font-semibold text-green-800">✈️ PACOTE COMPLETO (Recomendado)</td>
                      <td className="py-3 px-2 text-right font-bold text-green-700 text-base">R$ 11.904</td>
                      <td className="py-3 px-2 text-right font-bold text-green-700 text-base">R$ 2.976</td>
                      <td className="py-3 px-2 text-xs">
                        <div className="space-y-1">
                          <div>✅ Voo ida e volta MCZ ⇄ BUE (com paradas)</div>
                          <div>✅ 5 noites no hotel (2 quartos)</div>
                          <div>✅ Reserva flexível</div>
                          <div className="text-green-700 font-semibold">💰 Economize R$ 690!</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-2 font-medium">🏨 Apenas Hospedagem</td>
                      <td className="py-3 px-2 text-right">R$ 3.400</td>
                      <td className="py-3 px-2 text-right">R$ 850</td>
                      <td className="py-3 px-2 text-xs">
                        <div className="space-y-1">
                          <div>✅ 5 noites (2 quartos Standard Double)</div>
                          <div>✅ Cancelamento grátis até 28/12</div>
                          <div>⚠️ Voos por conta própria</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Destaque do Pacote */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-4">
                <h3 className="font-bold text-lg text-green-800 mb-2 flex items-center gap-2">
                  <span>🎉</span>
                  Melhor Opção: Pacote Voo + Hotel
                </h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Voos:</strong> Maceió (MCZ) ⇄ Buenos Aires (BUE) com paradas | Datas: 30/12 a 04/01</p>
                  <p><strong>Hotel:</strong> Up Central Córdoba (2 quartos, 4 pessoas, 5 noites)</p>
                  <p><strong>Vantagem:</strong> Pacote completo por <span className="font-bold text-green-700">R$ 2.976/pessoa</span> vs comprar separado</p>
                  <p className="text-xs text-gray-600 italic">* Preços verificados em 04/11/2025. Restam apenas 5 pacotes disponíveis!</p>
                </div>
              </div>

              {/* Pontos Positivos e Negativos */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <ThumbsUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-gray-700 mb-1">Pontos Positivos</p>
                    <p className="text-sm text-gray-600"><strong>Pacote completo com voo incluso por R$ 2.976/pessoa!</strong> Localização excelente (9.2), hotel novo e limpo, camas confortáveis, Wi-Fi excelente (9.4), equipe atenciosa, café/chá grátis 24h, perto de atrações turísticas, bem conectado por transporte público</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ThumbsDown className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-gray-700 mb-1">Pontos Negativos</p>
                    <p className="text-sm text-gray-600">Não inclui café da manhã (mas há opções ao redor), quartos pequenos, alguns sem ar condicionado (apenas ventilador), política de late check-out pode ser cara</p>
                  </div>
                </div>
              </div>

              {/* Comodidades */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-sm text-gray-700 mb-2">Comodidades Principais</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-gray-600">
                  <div>✅ Wi-Fi gratuito (9.4)</div>
                  <div>✅ Estacionamento privado</div>
                  <div>✅ Transfer aeroporto</div>
                  <div>✅ Recepção 24 horas</div>
                  <div>✅ Elevador</div>
                  <div>✅ Limpeza diária</div>
                  <div>✅ Aquecimento</div>
                  <div>✅ Quartos não fumantes</div>
                  <div>✅ Máquina de café/chá</div>
                </div>
              </div>

              {/* Localização e Distâncias */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-sm text-gray-700 mb-2">📍 Localização e Atrações Próximas</h3>
                <div className="grid md:grid-cols-2 gap-2 text-xs text-gray-600">
                  <div>• Florida Pedestrian Street: 800m</div>
                  <div>• Colon Theater: 900m</div>
                  <div>• Obelísko: 1,1 km</div>
                  <div>• Plaza de Mayo: 1,8 km</div>
                  <div>• Aeroporto Jorge Newbery: 6 km</div>
                  <div>• Estação Retiro (metrô/trem): próxima</div>
                </div>
              </div>

              {/* Aviso de Disponibilidade */}
              <div className="bg-orange-50 border border-orange-300 rounded-lg p-4">
                <p className="text-sm font-semibold text-orange-800 mb-1">⚠️ Disponibilidade Limitada!</p>
                <p className="text-xs text-gray-700">Restam apenas 4 quartos disponíveis para o período de réveillon. Cancelamento grátis até 28/12/2025. Pagamento na propriedade (sem pré-pagamento).</p>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-2"
                >
                  <a href="https://www.booking.com/hotel/ar/central-cordoba-buenos-aires.html?checkin=2025-12-30&checkout=2026-01-04&group_adults=4&no_rooms=2" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Booking.com
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-2"
                >
                  <a href="https://www.google.com/maps/place/Up+Central+C%C3%B3rdoba/@-34.5951,-58.3773,17z" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Google Maps
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 py-8 border-t border-gray-200">
          <p>Documento atualizado em 04 de Novembro de 2025</p>
          <p className="mt-1">Verificação de disponibilidade e preços reais de réveillon realizada</p>
          <p className="mt-1 text-indigo-600 font-semibold">Nova opção internacional adicionada: Buenos Aires, Argentina</p>
        </div>
      </main>
    </div>
  );
}
