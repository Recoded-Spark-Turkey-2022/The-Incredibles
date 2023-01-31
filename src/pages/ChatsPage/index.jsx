import Navbar from '../../components/Navbar';
import Chat from '../../components/Chat';
import ChatSidebar from '../../components/ChatSidebar';
import Footer from '../../components/Footer';
import Container from '../../components/UI/Containerp0';
function ChatsPage() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="px-5">
          <div className="w-full h-screen relative shadow-xl border my-10 max-md:my-5 rounded-xl  overflow-hidden flex">
            <ChatSidebar />
            <Chat />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default ChatsPage;
