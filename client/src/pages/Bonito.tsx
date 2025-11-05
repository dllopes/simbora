import { DestinationMenu } from "@/components/DestinationMenu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Bonito() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-emerald-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-200 sticky top-0 z-10 shadow-sm">
        <div className="container py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-2">
            Bonito (MS) – Pesquisa em construção
          </h1>
          <p className="text-sm text-emerald-700 max-w-3xl">
            Em breve vamos consolidar aqui hospedagens, passeios e dicas para a nova viagem a Bonito.
            Use o menu para navegar pelos destinos já mapeados.
          </p>
          <DestinationMenu className="mt-6" />
        </div>
      </header>

      <main className="container py-16">
        <Card className="max-w-3xl mx-auto border-emerald-200 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-900">Conteúdo a caminho!</CardTitle>
            <CardDescription>
              Esta página está reservada para as informações de Bonito — assim que os levantamentos forem feitos,
              traremos hospedagens sugeridas, orçamento previsto e passeios imperdíveis.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-emerald-800 space-y-3">
            <p>
              Enquanto isso, você pode revisar os destinos já analisados pelo menu superior. Quando as novas
              pesquisas estiverem prontas, todo o material ficará disponível aqui.
            </p>
            <p className="italic text-emerald-600">
              Sugestão: anote referências e links enquanto pesquisa — depois podemos consolidar tudo nesta página.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
