import {Link} from "react-router-dom";

function Dashboard() {
 
 
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">MyApp</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-gray-800">
                {"User name"}
              </p>

              <p className="text-xs text-gray-500">Usuário</p>
            </div>
<Link to="/">
            <button
          
              type="button"
              className="
                                px-4 py-2
                                text-sm
                                font-semibold
                                text-red-600
                                border border-red-200
                                rounded-lg
                                hover:bg-red-50
                                transition
                            "
            > 
              Sair
            </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <section className="mb-8">
          <p className="text-sm font-medium text-blue-600 mb-2">Dashboard</p>

          <h2 className="text-3xl font-bold text-gray-900">
            Bem-vindo, {"User name"}
          </h2>

          <p className="mt-2 text-gray-500">
            Que bom ter você de volta. Aqui está um resumo da sua conta.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>

              <span className="text-xs font-medium text-gray-400">
                VISÃO GERAL
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900">Visão geral</h3>

            <p className="mt-2 text-sm text-gray-500">
              Confira um resumo das principais informações da sua conta.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-lg bg-purple-100 flex items-center justify-center">
                <span className="text-xl">👤</span>
              </div>

              <span className="text-xs font-medium text-gray-400">CONTA</span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900">Meu perfil</h3>

            <p className="mt-2 text-sm text-gray-500">
              Visualize e gerencie as informações da sua conta.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="text-xl">⚙️</span>
              </div>

              <span className="text-xs font-medium text-gray-400">SISTEMA</span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              Configurações
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Gerencie as configurações e preferências da sua conta.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Resumo</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Informações da sua conta
                </p>
              </div>

              <span className="text-2xl">📈</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Status</p>

                <p className="mt-1 text-lg font-semibold text-green-600">
                  Ativo
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Atividades</p>

                <p className="mt-1 text-lg font-semibold text-gray-900">0</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Conta criada</p>

                <p className="mt-1 text-lg font-semibold text-gray-900">Hoje</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">{"User name"}</h3>

                <p className="text-sm text-gray-500">Usuário</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 uppercase">Email</p>

                <p className="text-sm text-gray-700 mt-1">{"user@email.com"}</p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase">Status</p>

                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />

                  <p className="text-sm text-gray-700">Conta ativa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Atividade recente
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Acompanhe as atividades da sua conta.
            </p>
          </div>

          <div className="p-10 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <span className="text-2xl">📭</span>
            </div>

            <h4 className="font-medium text-gray-900">
              Nenhuma atividade recente
            </h4>

            <p className="text-sm text-gray-500 mt-1">
              Quando houver alguma atividade, ela aparecerá aqui.
            </p>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()}. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Dashboard;
