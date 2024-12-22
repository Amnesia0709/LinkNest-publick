import startServer from "./grpc/grpcServer";

async function main() {
  try {
    startServer();
  } catch (error) {
    console.error(`Ошибка при запску сервера ${error}`);
  }
}

main();
