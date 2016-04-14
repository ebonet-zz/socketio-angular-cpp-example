# Socket.IO C++ small example

Cloning:

`git clone --recursive git://github.com/ebonet/socketio-angular-cpp-example.git`

## Server

1. Install dependencies via npm instal
2. Run with node main.js

## Web client

After running main.js, open your web browser and navigate to `localhost:3000`

## C++ client

### Unix

```
  sudo apt-get install libboost-all-dev
  cd client/socket
  cmake ./
  make install
  g++ -std=c++11  app.cpp -Isocket/build/include/  \
    socket/build/lib/Release/libsioclient.a -o client \
    -lboost_system -lboost_thread -lpthread
  ./client
```

*If The Cmake version is below 3.2* we will need to compile it ourselves.

```
  sudo apt-get install build-essential
  wget http://www.cmake.org/files/v3.2/cmake-3.2.2.tar.gz
  tar -zxvf cmake-3.2.2.tar.gz
  cd cmake-3.2.2
  ./configure
  sudo make
  sudo make install
```

### Mac

```
  brew install boost
  cd client/socket
  cmake ./
  make install
  g++ -std=c++11  app.cpp -Isocket/build/include/  \
    socket/build/lib/Release/libsioclient.a -o client \
    -lboost_system -lboost_thread-mt -lpthread
  ./client
```





4. Run the client executable and start typing!
