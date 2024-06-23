import Messages from "@/components/messages";

export default async function MessagesPage() {
  // there is a same request in layout.js file. but next just sends one of them and uses the response in all of application environment.

  const response = await fetch("http://localhost:8080/messages", {

    // cache: "force-cache" or "no-store"
    // ------------------------------------------
    // next: {
    //   revalidate: truty | number
    //    if number: Set the cache lifetime of a resource (in seconds).
    // }
  });

  // new options for fetch in next js: cach, next.

  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
