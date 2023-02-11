export function Index() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-900 p-4 font-inter md:p-8">
      <div className="flex flex-col lg:flex-row">
        <div className="mx-auto flex max-w-screen-md flex-col items-center justify-center py-8 px-4 text-center lg:py-16 lg:px-12">
          <img
            className="mx-auto mb-4 h-32 w-32"
            src="images/cheese-and-paws_logo.png"
            alt="cheese and paws logo"
          />

          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:mb-6 xl:text-6xl">
            Cheese and Paws
          </h1>
          <p className="font-light text-gray-500 dark:text-gray-400 md:text-lg xl:text-xl">
            Please PAWS while we get our site up and running! To order or
            request info about an order, please{" "}
            <a
              href="mailto:support@cheeseandpaws.com"
              className="font-semibold text-white underline underline-offset-4"
            >
              email support
            </a>
            .
          </p>
          <div className=" py-4 text-center lg:px-4">
            <div
              className="flex items-center rounded-full bg-indigo-800 p-2 text-sm leading-none text-indigo-100 lg:inline-flex"
              role="alert"
            >
              <span className="mr-3 flex rounded-full bg-indigo-500 px-2 py-1 text-xs font-bold uppercase">
                🐾
              </span>
              <span className="mr-2 flex-auto text-left font-normal">
                Currently fulfilled by{" "}
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold"
                >
                  Amazon
                </a>{" "}
                while we expand our operations
              </span>
              <svg
                className="h-4 w-4 fill-current opacity-75"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex min-h-min items-center justify-center">
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2020/08/5f3a7f2397be0_FJzsfHy__700.jpg"
            alt="cat covered in milk"
          />
        </div>
      </div>
    </section>
  );
}

export default Index;
