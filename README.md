# Jest Question

How do we mock out stuff in integration tests _per test_ with jest?

Question on Stack Overflow: https://stackoverflow.com/questions/53075279/how-do-we-mock-out-dependencies-with-jest-per-test

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
    ✕ should print breakfast (mocked) (21ms)

  ● meal tests › should print breakfast (mocked)

    expect(received).toBe(expected) // Object.is equality

    Expected: "Good morning. Breakfast is avocado and toast. Yum!"
    Received: "Good evening. Dinner is green beans and rice. Yum!"

      23 |
      24 |     // ...but we didn't mock it in time, so this fails!
    > 25 |     expect(getMeal()).toBe("Good morning. Breakfast is avocado and toast. Yum!");
         |                       ^
      26 |   });
      27 | });
      28 |

      at Object.toBe (__tests__/meal_test.js:25:23)

  console.log __tests__/meal_test.js:22
    { type: 'breakfast', veg: 'avocado', carbs: 'toast' }

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.149s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
