import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, LogOut, ChevronRight, Plus, Monitor, HardDrive, Wifi, Settings, Home, Users, FileText, Trash2, Search, Bell } from 'lucide-react';

const AppIcon = () => (
  <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center self-center mb-4 shadow-lg shadow-blue-600/30">
    <Monitor className="text-white" size={28} />
  </div>
);

const Campo = ({ label, value, onChangeText, placeholder, type = "text", icon: Icon }) => (
  <div className="mb-4">
    <label className="block text-xs font-semibold text-gray-600 mb-1.5">{label}</label>
    <div className="h-12 border border-gray-200 rounded-xl flex items-center bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
      {Icon && <Icon className="ml-3 mr-2 text-gray-400" size={18} />}
      <input
        type={type}
        className="flex-1 h-full bg-transparent text-sm text-gray-800 outline-none px-2 w-full"
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  </div>
);

const Button = ({ onPress, children, variant = "primary" }) => {
  const baseStyle = "h-12 rounded-xl flex items-center justify-center font-semibold text-sm transition-all shadow-md active:scale-95";
  const variants = {
    primary: "bg-blue-600 text-white shadow-blue-600/30 hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-700 shadow-gray-200/50 hover:bg-gray-200",
    danger: "bg-red-50 text-red-600 shadow-red-100/50 hover:bg-red-100"
  };
  return (
    <button onClick={onPress} className={`${baseStyle} ${variants[variant]} w-full mt-2`}>
      {children}
    </button>
  );
};

const LoginScreen = ({ onNavigate }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    // Simula autenticação
    onNavigate("home");
  };

  return (
    <div className="flex-1 flex flex-col justify-center p-6 bg-gray-50 h-full overflow-y-auto">
      <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 w-full max-w-sm mx-auto">
        <AppIcon />
        <h2 className="text-center text-gray-800 text-2xl font-bold">Login</h2>
        <p className="text-center text-gray-500 text-xs mt-1 mb-6">Acesse sua conta do sistema</p>

        <Campo label="E-mail" value={email} onChangeText={setEmail} placeholder="Digite seu e-mail" icon={Mail} />
        <Campo label="Senha" value={senha} onChangeText={setSenha} placeholder="Digite sua senha" type="password" icon={Lock} />

        <div className="flex justify-end mb-4">
          <button className="text-blue-600 text-xs font-medium">Esqueceu sua senha?</button>
        </div>

        <Button onPress={handleLogin}>Entrar</Button>

        <p className="text-center text-gray-500 text-xs mt-6">
          Não tem uma conta? <button onClick={() => onNavigate("cadastro")} className="text-blue-600 font-bold ml-1">Criar conta</button>
        </p>
      </div>
    </div>
  );
};

const CadastroScreen = ({ onNavigate }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="flex-1 flex flex-col justify-center p-6 bg-gray-50 h-full overflow-y-auto">
      <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 w-full max-w-sm mx-auto">
        <AppIcon />
        <h2 className="text-center text-gray-800 text-2xl font-bold">Cadastro</h2>
        <p className="text-center text-gray-500 text-xs mt-1 mb-6">Crie sua conta para começar</p>

        <Campo label="Nome" value={nome} onChangeText={setNome} placeholder="Nome completo" icon={User} />
        <Campo label="E-mail" value={email} onChangeText={setEmail} placeholder="Digite seu e-mail" icon={Mail} />
        <Campo label="Senha" value={senha} onChangeText={setSenha} placeholder="Crie uma senha" type="password" icon={Lock} />

        <Button onPress={() => onNavigate("login")}>Cadastrar</Button>

        <p className="text-center text-gray-500 text-xs mt-6">
          Já tem conta? <button onClick={() => onNavigate("login")} className="text-blue-600 font-bold ml-1">Entrar</button>
        </p>
      </div>
    </div>
  );
};

const HomeScreen = () => {
  const chamados = [
    { id: "1", titulo: "Projetor da Sala 04 não liga", categoria: "Manutenção / TI", status: "Pendente", data: "16/09/2026", color: "bg-amber-100 text-amber-700" },
    { id: "2", titulo: "Ar-condicionado pingando", categoria: "Infraestrutura", status: "Em andamento", data: "15/09/2026", color: "bg-blue-100 text-blue-700" },
    { id: "3", titulo: "Falta de acesso à rede Wi-Fi", categoria: "Suporte de TI", status: "Resolvido", data: "14/09/2026", color: "bg-emerald-100 text-emerald-700" },
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-gray-50 overflow-y-auto pb-24">
      <div className="bg-blue-600 p-6 pt-12 pb-8 rounded-b-3xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-white text-2xl font-bold tracking-wide">SolSis</h1>
            <p className="text-blue-100 text-sm opacity-90">Olá, João Paz</p>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
            <Bell className="text-white" size={20} />
          </div>
        </div>
        
        <div className="bg-white/10 p-4 rounded-2xl flex items-center justify-between backdrop-blur-sm border border-white/20">
          <div>
            <p className="text-blue-100 text-xs uppercase tracking-wider font-semibold">Meus Chamados</p>
            <p className="text-white text-3xl font-bold mt-1">3 <span className="text-sm font-normal opacity-80">ativos</span></p>
          </div>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-xl font-bold text-sm shadow-sm flex items-center gap-1">
            <Plus size={16} /> Novo
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-gray-800 font-bold mb-4 text-lg">Atividades Recentes</h3>
        <div className="space-y-3">
          {chamados.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.categoria}</span>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${item.color}`}>{item.status}</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-3">{item.titulo}</h4>
              <div className="flex justify-between items-center pt-3 border-t border-gray-50">
                <span className="text-xs text-gray-400">{item.data}</span>
                <ChevronRight size={16} className="text-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const UsuariosScreen = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarUsuarios = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8080/api/usuarios');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setUsuarios(data);
    } catch (error) {
      // Fallback Visual
      setUsuarios([
        { id: 1, nome: 'João Paz', matricula: '2023101' },
        { id: 2, nome: 'Juan Vila Nova', matricula: '2023102' },
        { id: 3, nome: 'Matheus Henrique', matricula: '2023103' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { carregarUsuarios(); }, []);

  const deletarUsuario = (id) => {
    // Simula deleção no ambiente front-end sem alert()
    setUsuarios(usuarios.filter(u => u.id !== id));
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-gray-50 pb-24">
      <div className="bg-white pt-12 pb-4 px-6 shadow-sm z-10 sticky top-0 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Usuários</h2>
        <button className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
          <Plus size={20} />
        </button>
      </div>

      <div className="p-6 overflow-y-auto">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input type="text" placeholder="Buscar por nome ou matrícula..." className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
        </div>

        {loading ? (
          <div className="flex justify-center p-10"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>
        ) : (
          <div className="space-y-3">
            {usuarios.map((user) => (
              <div key={user.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100">
                    {user.nome.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{user.nome}</h4>
                    <p className="text-xs text-gray-500 font-mono mt-0.5">Matrícula: {user.matricula}</p>
                  </div>
                </div>
                <button onClick={() => deletarUsuario(user.id)} className="w-10 h-10 rounded-full flex items-center justify-center text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const RequisicoesScreen = () => {
  const [requisicoes, setRequisicoes] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarRequisicoes = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8080/api/requisicoes');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setRequisicoes(data);
    } catch (error) {
      // Fallback Visual
      setRequisicoes([
        { id: 1, data: '2026-09-23', tipo: 'MANUTENCAO_COMPUTADOR', descricao: 'PC da sala 02 não inicia', status: 'AGUARDO' },
        { id: 2, data: '2026-09-22', tipo: 'REDEFINICAO_SENHA', descricao: 'Professor esqueceu a senha', status: 'CONCLUIDO' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { carregarRequisicoes(); }, []);

  const getStatusColor = (status) => {
    if (status === 'CONCLUIDO') return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    if (status === 'AGUARDO') return 'bg-amber-100 text-amber-700 border-amber-200';
    return 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-gray-50 pb-24">
      <div className="bg-white pt-12 pb-4 px-6 shadow-sm z-10 sticky top-0 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Requisições</h2>
        <button className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
          <Plus size={20} />
        </button>
      </div>

      <div className="p-6 overflow-y-auto">
        {loading ? (
          <div className="flex justify-center p-10"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>
        ) : (
          <div className="space-y-4">
            {requisicoes.map((req) => (
              <div key={req.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <div className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${getStatusColor(req.status)}`}>
                    {req.status}
                  </div>
                  <span className="text-xs text-gray-400 font-mono">#{req.id}</span>
                </div>
                
                <h4 className="font-bold text-gray-800 text-sm mb-1">{req.tipo.replace(/_/g, ' ')}</h4>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{req.descricao}</p>
                
                <div className="flex items-center gap-2 text-xs text-gray-400 pt-3 border-t border-gray-50">
                  <FileText size={14} />
                  <span>Registrado em {req.data}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("login");

  // Barra de Navegação Inferior (Simulando Tab Navigator do React Native)
  const BottomTabs = () => (
    <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 flex justify-around items-center h-16 px-2 pb-safe z-50">
      <button onClick={() => setCurrentScreen('home')} className={`flex flex-col items-center p-2 w-16 ${currentScreen === 'home' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
        <Home size={22} className="mb-1" />
        <span className="text-[10px] font-medium">Início</span>
      </button>
      <button onClick={() => setCurrentScreen('requisicoes')} className={`flex flex-col items-center p-2 w-16 ${currentScreen === 'requisicoes' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
        <FileText size={22} className="mb-1" />
        <span className="text-[10px] font-medium">Chamados</span>
      </button>
      <button onClick={() => setCurrentScreen('usuarios')} className={`flex flex-col items-center p-2 w-16 ${currentScreen === 'usuarios' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
        <Users size={22} className="mb-1" />
        <span className="text-[10px] font-medium">Usuários</span>
      </button>
      <button onClick={() => setCurrentScreen('login')} className="flex flex-col items-center p-2 w-16 text-gray-400 hover:text-red-500">
        <LogOut size={22} className="mb-1" />
        <span className="text-[10px] font-medium">Sair</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 sm:p-8 font-sans">
      {/* Moldura do Celular (Para Preview no Desktop) */}
      <div className="w-full max-w-[400px] h-[800px] max-h-screen bg-white sm:rounded-[2.5rem] sm:shadow-2xl sm:border-[10px] border-gray-900 overflow-hidden relative flex flex-col">
        
        {/* Renderizador de Telas (Simulando Stack/Tab Navigator) */}
        {currentScreen === "login" && <LoginScreen onNavigate={setCurrentScreen} />}
        {currentScreen === "cadastro" && <CadastroScreen onNavigate={setCurrentScreen} />}
        {currentScreen === "home" && <HomeScreen />}
        {currentScreen === "usuarios" && <UsuariosScreen />}
        {currentScreen === "requisicoes" && <RequisicoesScreen />}

        {/* Exibe o Bottom Tabs apenas se não estiver nas telas de Autenticação */}
        {!["login", "cadastro"].includes(currentScreen) && <BottomTabs />}
        
      </div>
    </div>
  );
}
