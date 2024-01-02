import {render, screen} from '@testing-library/vue';
import MainNav from '@/components/MainNav.vue';
import { expect } from 'vitest';

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const name = screen.getByText("Dodo Careers")
    expect(name).toBeInTheDocument();
  })

  it('displays menu items for navigation', () => {
    render(MainNav);
    const navigationList = screen.getAllByRole("listitem")
    const navigationText = navigationList.map(el => el.textContent)
    console.log(navigationText);
    expect(navigationText).toEqual([
      'Teams',
      'Location',
      'Life at Dodo Careers',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })
})


