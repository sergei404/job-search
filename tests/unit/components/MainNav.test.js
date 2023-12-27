import {render, screen} from '@testing-library/vue';

import MainNav from '@/components/MainNav.vue';
import { expect } from 'vitest';

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const name = screen.getByText("Dodo Careers")
    expect(name).toBeInTheDocument();
  })
})


