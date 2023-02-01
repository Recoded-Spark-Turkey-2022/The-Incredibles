import Chat from '../../components/Chat';
import ChatSidebar from '../../components/ChatSidebar';
import Container from '../../components/UI/Containerp0';

function ChatsPage() {
  return (
    <Container>
      <div className="">
        <div className="w-4/5 h-full mt-4 mx-auto relative shadow-xl border max-md:w-full  max-md: rounded-xl  overflow-hidden flex">
          <ChatSidebar />
          <Chat />
        </div>
      </div>
    </Container>
  );
}

export default ChatsPage;
