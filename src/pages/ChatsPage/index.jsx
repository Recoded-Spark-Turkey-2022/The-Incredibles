import Navbar from '../../components/Navbar';
import Chat from '../../components/Chat';
import ChatSidebar from '../../components/ChatSidebar';
import Footer from '../../components/Footer';

function ChatsPage() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen relative   rounded-xl  overflow-hidden flex">
        <ChatSidebar />
        <Chat />
      </div>
      <Footer />
    </>
  );
}

export default ChatsPage;
