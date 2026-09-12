"use client";

import { Link } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../service/api";

function Register() {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    confirmPassword: ""
  });

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!formData.userName || !formData.userEmail || !formData.userPassword || !formData.confirmPassword) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    if(formData.userPassword !== formData.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

  
    const userData = {
      name: formData.userName,
      email: formData.userEmail,
      password: formData.userPassword
    };

  try{
    const response = await registerUser(userData);
    if(response.success) {
      alert("Conta criada com sucesso!");
      setFormData({
        userName: "",
        userEmail: "",
        userPassword: "",
        confirmPassword: ""
      });
    }}catch(error) {
      alert("Erro ao criar conta: " + error);
    }

  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Criar conta</h1>

            <p className="mt-2 text-gray-500">
              Preencha os dados para criar sua conta
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nome
              </label>

              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="Digite seu nome"
                required
                className="
                                    w-full
                                    px-4 py-3
                                    bg-gray-50
                                    border border-gray-300
                                    rounded-lg
                                    text-gray-900
                                    placeholder-gray-400
                                    outline-none
                                    transition
                                    focus:bg-white
                                    focus:border-blue-500
                                    focus:ring-4
                                    focus:ring-blue-500/10
                                "
              value={formData.userName}
              onChange={(e) => setFormData({...formData, userName: e.target.value})}
            />
          </div>

            <div>
              <label
                htmlFor="userEmail"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>

              <input
                type="email"
                id="userEmail"
                name="userEmail"
                placeholder="seu@email.com"
                required
                className="
                                    w-full
                                    px-4 py-3
                                    bg-gray-50
                                    border border-gray-300
                                    rounded-lg
                                    text-gray-900
                                    placeholder-gray-400
                                    outline-none
                                    transition
                                    focus:bg-white
                                    focus:border-blue-500
                                    focus:ring-4
                                    focus:ring-blue-500/10
                                "
              value={formData.userEmail}
              onChange={(e) => setFormData({...formData, userEmail: e.target.value})}
            />
          </div>

            <div>
              <label
                htmlFor="userPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Senha
              </label>

              <input
                type="password"
                id="userPassword"
                name="userPassword"
                placeholder="Digite sua senha"
                required
                className="
                                    w-full
                                    px-4 py-3
                                    bg-gray-50
                                    border border-gray-300
                                    rounded-lg
                                    text-gray-900
                                    placeholder-gray-400
                                    outline-none
                                    transition
                                    focus:bg-white
                                    focus:border-blue-500
                                    focus:ring-4
                                    focus:ring-blue-500/10
                                "
              value={formData.userPassword}
              onChange={(e) => setFormData({...formData, userPassword: e.target.value})}
            />
          </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirmar senha
              </label>

              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Digite sua senha novamente"
                required
                className="
                                    w-full
                                    px-4 py-3
                                    bg-gray-50
                                    border border-gray-300
                                    rounded-lg
                                    text-gray-900
                                    placeholder-gray-400
                                    outline-none
                                    transition
                                    focus:bg-white
                                    focus:border-blue-500
                                    focus:ring-4
                                    focus:ring-blue-500/10
                                "
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
          </div>

            <button
              type="submit"
              className="
                                w-full
                                py-3
                                px-4
                                bg-blue-600
                                text-white
                                rounded-lg
                                font-semibold
                                shadow-sm
                                transition
                                hover:bg-blue-700
                                hover:shadow-md
                                active:scale-[0.98]
                                focus:outline-none
                                focus:ring-4
                                focus:ring-blue-500/30
                            "
            >
              Criar conta
            </button>
          </form>

          <div className="relative my-7">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-sm text-gray-400">ou</span>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500">
            Já possui uma conta?
            <Link
              to="/"
              className="
                                font-semibold
                                text-blue-600
                                hover:text-blue-700
                                hover:underline
                            "
            >
              Entrar
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} MyApp. Todos os direitos reservados.
        </p>
      </div>
    </main>
  );
}

export default Register;
