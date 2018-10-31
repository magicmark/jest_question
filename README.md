# yarn question

How do we mock out stuff in integration tests _per test_ with jest?

## Repro

```
$ yarn test
```

### Current output

```
╔═ markl@dev21-uswest1cdevc: ~/jest_question git:(master)
╚═ ♪ yarn test --no-watchman
yarn run v1.10.1
$ jest --no-watchman
 FAIL  __tests__/meal_test.js
  meal tests
    ✓ should print dinner (4ms)
    ✕ should print breakfast (mocked) (19ms)

  ● meal tests › should print breakfast (mocked)

    expect(received).toBe(expected) // Object.is equality

    Expected: "Good morning. Dinner is avocado and toast. Yum!"
    Received: "Good evening. Dinner is green beans and rice. Yum!"

      19 |     }));
      20 |     console.log(require("../src/food"));
    > 21 |     expect(getMeal()).toBe("Good morning. Dinner is avocado and toast. Yum!");
         |                       ^
      22 |   });
      23 | });
      24 |

      at Object.toBe (__tests__/meal_test.js:21:23)

  console.log __tests__/meal_test.js:20
    { type: 'breakfast', veg: 'avocado', carbs: 'toast' }

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.2s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
