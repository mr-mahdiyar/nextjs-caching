import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

export default async function MessagesPage() {
  // there is a same request in layout.js file. but next just sends one of them and uses the response in all of application environment.

  //const response = await fetch("http://localhost:8080/messages", {
  // new options for fetch in next js: cach, next.
  // cache: "force-cache" or "no-store"
  // ------------------------------------------
  // next: {
  //   revalidate: truty | number => if number: Set the cache lifetime of a resource (in seconds).
  // tags: [array of strings] => revalidate a specific request with specific tags instead of revalidatePath.
  // }
  //});
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
