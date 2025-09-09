import Container from "@/app/container";

const NotFound = () => {
  return (
    <Container title="404">
      <h1 className="text-9xl font-sans font-bold animate-pulse">404</h1>
      <h2>Page not found</h2>
    </Container>
  );
};

export default NotFound;
