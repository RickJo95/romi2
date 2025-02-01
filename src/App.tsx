import React, { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "motion/react";
import { Flame, Heart, Star, X, MessageCircle, User } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import image1 from "@/assets/nerd.jpeg";
import image2 from "@/assets/Shifu.jpeg";
import image3 from "@/assets/it-takes-two.webp";
import image4 from "@/assets/horny.jpeg";
import image5 from "@/assets/ttas.jpeg";
import jerry from "@/assets/happy-jerry.gif";
import cat2 from "@/assets/cat2.gif";

interface Profile {
  id: number;
  image: string;
  footer: string;
  age: number;
}

interface Message {
  text: string;
  sender: string;
  time: string;
}

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  messages: Message[];
}

type NavigationView = "profile" | "swipe" | "messages";

const Navigation: React.FC<{
  currentView: NavigationView;
  onNavigate: (view: NavigationView) => void;
}> = ({ currentView, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div className="flex justify-around items-center py-3">
        <button
          onClick={() => onNavigate("profile")}
          className={`p-2 rounded-full transition-colors ${
            currentView === "profile" ? "text-pink-600" : "text-gray-400"
          }`}
        >
          <User size={28} />
        </button>
        <button
          onClick={() => onNavigate("swipe")}
          className={`p-2 rounded-full transition-colors ${
            currentView === "swipe" ? "text-pink-600" : "text-gray-400"
          }`}
        >
          <Flame size={28} />
        </button>
        <button
          onClick={() => onNavigate("messages")}
          className={`p-2 rounded-full transition-colors ${
            currentView === "messages" ? "text-pink-600" : "text-gray-400"
          }`}
        >
          <MessageCircle size={28} />
        </button>
      </div>
    </nav>
  );
};

const ProfileView: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen bg-gray-100 pt-16 px-4"
    >
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="w-24 h-24 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-4">
          <User size={48} className="text-pink-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">Tu Perfil</h2>
        <p className="text-gray-500 text-center">
          Este es el perfil de la mujer más preciosa del mundo.
        </p>
        <br />
        <p className="text-gray-500 text-center">
          No se puede editar, porque ya es perfecta.
        </p>
      </div>
    </motion.div>
  );
};

const profiles: Profile[] = [
  {
    id: 1,
    image: image1,
    footer: "Nerd de tiempo completo 🤓",
    age: 29,
  },
  {
    id: 2,
    image: image2,
    footer: "Si te gustan los gatos, desliza a la derecha 🐱",
    age: 29,
  },
  {
    id: 3,
    image: image3,
    footer: "¿Serías mi player 2 en esta aventura? 🎮",
    age: 29,
  },
  {
    id: 4,
    image: image4,
    footer: "Buscando mi compañera de anime y videojuegos 📺",
    age: 29,
  },
  {
    id: 5,
    image: image5,
    footer: "Si tienes unas ttotas, dame like 🍼",
    age: 29,
  },
];

const messages: Chat[] = [
  {
    id: 1,
    name: "Ricardo Nerd",
    lastMessage: "¿Sabes? Desde que te conocí, mi vida es com...",
    messages: [
      { text: "Hola hermosa ❤️", sender: "Ricardo", time: "12:01" },
      {
        text: "¿Sabías que eres el bug más bonito en mi código?",
        sender: "Ricardo",
        time: "12:02",
      },
      {
        text: "Porque haces que mi corazón haga overflow de amor 💕",
        sender: "Ricardo",
        time: "12:03",
      },
      {
        text: "¿Sabes? Desde que te conocí, mi vida es como un juego en modo fácil 🎮",
        sender: "Ricardo",
        time: "12:05",
      },
    ],
  },
  {
    id: 2,
    name: "Ricardo Otaku",
    lastMessage: "Tú eres el tema de Howl de mi vida",
    messages: [
      {
        text: "Yo sí te ando bajando el sol, la luna y los Staryus",
        sender: "Ricardo",
        time: "15:30",
      },
      {
        text: "Tendré que aprender una técnica de respiración, porque me quedo sin aire al verte 🫣",
        sender: "Ricardo",
        time: "15:31",
      },
      {
        text: "Sé que no eres un Pokémon, pero yo te elijo 😙",
        sender: "Ricardo",
        time: "15:32",
      },
      {
        text: "Tú eres el tema de Howl de mi vida",
        sender: "Ricardo",
        time: "15:32",
      },
    ],
  },
  {
    id: 3,
    name: "Ricardo Gamer",
    lastMessage: "Press START to begin our story 🎮",
    messages: [
      {
        text: "Player 2 has entered the game!",
        sender: "Ricardo",
        time: "18:45",
      },
      {
        text: "¿Lista para esta aventura juntos?",
        sender: "Ricardo",
        time: "18:46",
      },
      {
        text: "Porque tú eres mi checkpoint favorito ❤️",
        sender: "Ricardo",
        time: "18:47",
      },
    ],
  },
  {
    id: 4,
    name: "Ricardo Horny",
    lastMessage: "Muéstrame una tta 👀",
    messages: [
      {
        text: "Mi amor por ti es más grande que la perversión del monje Miroku, Happosai y Roshi juntos.",
        sender: "Ricardo",
        time: "18:45",
      },
      {
        text: "¿Ya te vas a sentar en mi cara? >:(",
        sender: "Ricardo",
        time: "18:46",
      },
      {
        text: "No soy perro, pero guau contigo 🤤",
        sender: "Ricardo",
        time: "18:47",
      },
      {
        text: "Benditas las manos del agricultor que recolectó el algodón para fabricar el calzón donde descansa esa hermosa retaguardia",
        sender: "Ricardo",
        time: "18:49",
      },
      {
        text: "Ven a vacunar estas perras ganas que tengo de estar contigo",
        sender: "Ricardo",
        time: "18:51",
      },
      {
        text: "Eres como una vaca pura; hay que sacarte unas buenas crías hpta 🤤🤤🤤",
        sender: "Ricardo",
        time: "18:52",
      },
      {
        text: "Quisiera ser un tornillo, y que tú fueras una tuerca, para poder atornillarte y que grites como puerca 😆",
        sender: "Ricardo",
        time: "18:54",
      },
      { text: "Muéstrame una tta 👀", sender: "Ricardo", time: "18:59" },
      { text: "", sender: "", time: "" },
    ],
  },
];

interface SwipeCardProps {
  profile: Profile;
  onSwipe: (direction: "left" | "right" | "up") => void;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ profile, onSwipe }) => {
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [exitX, setExitX] = useState(0);
  const [exitY, setExitY] = useState(0);

  const handleDragEnd = (_: never, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      setExitX(1000);
      onSwipe("right");
    } else if (info.offset.x < -threshold) {
      setExitX(-1000);
      onSwipe("left");
    } else if (info.offset.y < -threshold) {
      setExitY(-1000);
      onSwipe("up");
    } else {
      setDragPosition({ x: 0, y: 0 });
    }
  };

  return (
    <motion.div
      className="absolute top-0 left-0 right-0 h-[calc(100vh-80px)] mt-16 mx-4"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      animate={{
        x: exitX || dragPosition.x,
        y: exitY || dragPosition.y,
        rotate: (dragPosition.x / 50) * 5,
        opacity: exitX || exitY ? 0 : 1,
      }}
      transition={{ type: "spring", damping: 50, stiffness: 500 }}
      style={{
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
    >
      <div className="bg-white shadow-xl rounded-2xl h-full w-full overflow-hidden relative">
        <img
          src={profile.image}
          alt={`Ricardo ${profile.id}`}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
        <p className="text-2xl font-bold text-white">
            Ricardo <span className="font-normal">{profile.age}</span>
          </p>
          <p className="text-lg mt-2 text-white">{profile.footer}</p>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6 z-10">
        <button
          onClick={() => onSwipe("left")}
          className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <X className="text-red-500 fill-red-500" size={32} />
        </button>
        <button
          onClick={() => onSwipe("up")}
          className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Star className="text-blue-500 fill-blue-500" size={32} />
        </button>
        <button
          onClick={() => onSwipe("right")}
          className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart className="text-green-500 fill-green-500" size={32} />
        </button>
      </div>
    </motion.div>
  );
};

interface ChatViewProps {
  chat: Chat;
  onBack: () => void;
}

const ChatView: React.FC<ChatViewProps> = ({ chat, onBack }) => {
  return (
    <motion.div
      className="h-screen bg-gray-100 flex flex-col"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
    >
      <div className="bg-white p-4 flex items-center gap-4 shadow-sm">
        <button onClick={onBack} className="text-pink-600">
          <X size={24} />
        </button>
        <span className="font-bold text-lg">{chat.name}</span>
      </div>
      <div
        className={`flex-1 p-4 overflow-y-auto ${
          messages.length >= 6 ? "mb-14" : ""
        }`}
      >
        {chat.messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`mb-4 flex ${
              message.sender === "Ricardo" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-[80%] ${
                message.sender === "Ricardo"
                  ? "bg-pink-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              <p>{message.text}</p>
              <p className="text-xs mt-1 opacity-70">{message.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

interface MessagesListProps {
  messages: Chat[];
  onChatSelect: (chat: Chat) => void;
}

const MessagesList: React.FC<MessagesListProps> = ({
  messages,
  onChatSelect,
}) => {
  return (
    <motion.div
      className="h-screen bg-gray-100"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
    >
      <div className="bg-white p-4 shadow-sm">
        <h2 className="text-xl font-bold text-pink-600">Mensajes</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {messages.map((chat) => (
          <motion.div
            key={chat.id}
            className="p-4 bg-white flex items-center gap-4 cursor-pointer hover:bg-gray-50"
            onClick={() => onChatSelect(chat)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <User size={24} className="text-pink-600" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-900">{chat.name}</p>
              <p className="text-gray-500 text-sm truncate">
                {chat.lastMessage}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const TinderClone: React.FC = () => {
  const [currentView, setCurrentView] = useState<NavigationView>("swipe");
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (view: NavigationView) => {
    if (view === "swipe") {
      // Resetear el índice cuando volvemos a swipe para refrescar los matches
      setCurrentIndex(0);
    }
    setCurrentView(view);
    setSelectedChat(null);
  };

  const renderContent = () => {
    switch (currentView) {
      case "profile":
        return <ProfileView />;
      case "swipe":
        return (
          <div className="relative h-[calc(100vh-64px)]">
            <div className="bg-white shadow-sm p-4 fixed top-0 left-0 right-0 z-50 flex justify-center items-center">
              <h3 className="text-pink-600 font-black text-xl flex items-center gap-2">
                Emparejador <Flame className="fill-pink-600" />
              </h3>
            </div>
            <AnimatePresence>
              {currentIndex < profiles.length ? (
                <SwipeCard
                  key={profiles[currentIndex].id}
                  profile={profiles[currentIndex]}
                  onSwipe={() => setCurrentIndex((prev) => prev + 1)}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex items-center justify-center p-4"
                >
                  <div className="text-center">
                    <p className="text-xl text-gray-600 mb-4">
                      No hay más perfiles por ahora, pinshi hambreada
                    </p>
                    <button
                      onClick={() => setCurrentIndex(0)}
                      className="bg-pink-600 text-white px-6 py-3 rounded-full font-bold hover:bg-pink-700 transition-colors"
                    >
                      Refrescar matches
                    </button>
                    <div className="flex flex-col gap-2">
                      <p className="text-gray-600 mt-10">Be my valentine?</p>
                      <div className="flex flex-row gap-4 justify-around items-center w-min mx-auto">
                        <AlertDialog>
                          <AlertDialogTrigger className="rounded bg-pink-600/70 text-white px-3 py-0.5 shadow">Chi</AlertDialogTrigger>
                          <AlertDialogContent className="rounded-lg bg-white p-6 shadow backdrop-blur dark:bg-slate-900">
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-2xl dark:text-slate-300">
                                ¡¡Lo sabía!! 🥳
                              </AlertDialogTitle>
                              <AlertDialogDescription className="dark:text-slate-50 text-lg">
                                <div className="text-center w-fit h-auto mx-auto my-2">
                                  <img src={jerry} alt="Jerry happy" />
                                </div>
                                Tenemos una cita en el Dann Carlton el 14 de febrero a las 8:30 p.m. Ven preciosota. (O sea, más de lo normal)
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="dark:border-slate-600 dark:text-slate-100">¡Entendido! Iré preciosota</AlertDialogCancel>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>

                        <AlertDialog>
                        <AlertDialogTrigger className="rounded bg-pink-600/70 text-white px-3 py-0.5 opacity-50">Ño</AlertDialogTrigger>
                          <AlertDialogContent className="rounded-lg bg-white p-6 shadow backdrop-blur dark:bg-slate-900">
                            <AlertDialogHeader>
                            <AlertDialogTitle className="text-2xl dark:text-slate-300">
                                KHE
                              </AlertDialogTitle>
                              <AlertDialogDescription className="dark:text-slate-50 text-lg">
                              <div className="text-center w-fit h-auto mx-auto my-2">
                                  <img src={cat2} alt="wtf" />
                                </div>
                                ¿Sí te das cuenta que pusiste que no? Otzea, recapacita, esta no es opción válida. No ves que el botón está opaco? Es decir, desactivado, fea.
                                <p>Sí y punto, viva el patriarcado, ya decidí por ti.</p>
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="dark:border-slate-600 dark:text-slate-100">Está bien</AlertDialogCancel>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      case "messages":
        return selectedChat ? (
          <ChatView chat={selectedChat} onBack={() => setSelectedChat(null)} />
        ) : (
          <MessagesList messages={messages} onChatSelect={setSelectedChat} />
        );
    }
  };

  return (
    <div className="h-screen bg-gray-100">
      <AnimatePresence mode="sync">{renderContent()}</AnimatePresence>
      <Navigation currentView={currentView} onNavigate={handleNavigation} />
    </div>
  );
};

export default TinderClone;
