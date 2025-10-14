| **Role**      | **Description**                   | **Example Usage**                                      |
| ------------- | --------------------------------- | ------------------------------------------------------ |
| `button`      | Clickable buttons                 | `page.getByRole('button', { name: 'Submit' })`         |
| `link`        | Anchor links                      | `page.getByRole('link', { name: 'Home' })`             |
| `textbox`     | Input or textarea fields          | `page.getByRole('textbox', { name: 'Username' })`      |
| `checkbox`    | Checkbox inputs                   | `page.getByRole('checkbox', { name: 'Accept Terms' })` |
| `radio`       | Radio buttons                     | `page.getByRole('radio', { name: 'Male' })`            |
| `combobox`    | Dropdown selects                  | `page.getByRole('combobox', { name: 'Country' })`      |
| `listbox`     | The container of selectable items | `page.getByRole('listbox')`                            |
| `option`      | Item inside a listbox             | `page.getByRole('option', { name: 'Bangladesh' })`     |
| `menu`        | Navigation menu container         | `page.getByRole('menu')`                               |
| `menuitem`    | An item within a menu             | `page.getByRole('menuitem', { name: 'Settings' })`     |
| `heading`     | Headings (`<h1>`–`<h6>`)          | `page.getByRole('heading', { name: 'Welcome' })`       |
| `article`     | Independent content sections      | `page.getByRole('article')`                            |
| `img`         | Images with alt text              | `page.getByRole('img', { name: 'Logo' })`              |
| `table`       | Table container                   | `page.getByRole('table')`                              |
| `row`         | Table rows                        | `page.getByRole('row', { name: /User/ })`              |
| `cell`        | Table cells                       | `page.getByRole('cell', { name: 'Email' })`            |
| `alert`       | Alert messages                    | `page.getByRole('alert')`                              |
| `dialog`      | Modal or popup                    | `page.getByRole('dialog', { name: 'Login' })`          |
| `form`        | Form sections                     | `page.getByRole('form', { name: 'Sign Up' })`          |
| `tab`         | Tab in a tab list                 | `page.getByRole('tab', { name: 'Overview' })`          |
| `tablist`     | Tab container                     | `page.getByRole('tablist')`                            |
| `tabpanel`    | Content area for a tab            | `page.getByRole('tabpanel')`                           |
| `slider`      | Range sliders                     | `page.getByRole('slider')`                             |
| `progressbar` | Progress indicator                | `page.getByRole('progressbar')`                        |
| `status`      | Status messages                   | `page.getByRole('status')`                             |
| `switch`      | Toggle switch                     | `page.getByRole('switch', { name: 'Dark Mode' })`      |
| `navigation`  | Navigation landmarks              | `page.getByRole('navigation')`                         |
| `banner`      | Page header landmark              | `page.getByRole('banner')`                             |
| `contentinfo` | Footer landmark                   | `page.getByRole('contentinfo')`                        |
| `main`        | Main content area                 | `page.getByRole('main')`                               |
