#include <iostream>
#include <string>
#include <sstream>

#include <sio_client.h>
#include <sio_message.h>
#include <sio_socket.h>

using namespace std;

int main() {

  string input = "";

  sio::client h;

  h.connect("http://127.0.0.1:3000/?client=cpp", { std::make_pair("client", "cpp") });

  h.socket()->on("message", [&](sio::event& ev)
  {
    cout << ev.get_message()->get_string() << endl;
  });

  while (true) {
    cout << "Enter message:\n>";
    getline(cin, input);

    h.socket()->emit("message", input);

  }

}
