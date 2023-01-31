import Chat from '../../components/Chat';
import ChatSidebar from '../../components/ChatSidebar';
import Container from '../../components/UI/Containerp0';

function ChatsPage() {
  return (
    <Container>
      <div className="px-5">
        <div className="w-full h-screen relative shadow-xl border my-10 max-md:my-5 rounded-xl  overflow-hidden flex">
          <ChatSidebar />
          <Chat />
        </div>
      </div>
    </Container>
  );
}

export default ChatsPage;
