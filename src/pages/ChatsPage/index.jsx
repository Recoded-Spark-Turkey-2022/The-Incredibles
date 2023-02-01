import Chat from '../../components/Chat';
import ChatSidebar from '../../components/ChatSidebar';
import Container from '../../components/UI/Containerp0';

function ChatsPage() {
  return (
    <Container>
      <div className="">
        <div className="w-5/6 h-full mx-auto relative shadow-xl border  max-md:my-5 rounded-xl  overflow-hidden flex">
          <ChatSidebar />
          <Chat />
        </div>
      </div>
    </Container>
  );
}

export default ChatsPage;
