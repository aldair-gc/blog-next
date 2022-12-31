import { render, screen } from "@testing-library/react";
import Layout from "./layout";

describe("<Layout />", () => {
  it("should render a layout", () => {
    render(
      <Layout>
        <main>test</main>
      </Layout>,
    );
    expect(screen.getByRole("link", { name: "Next Strapi Blog" }));
  });
});
