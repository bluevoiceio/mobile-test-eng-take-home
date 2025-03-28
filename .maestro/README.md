# Maestro automation project

1. **Process**
   1. Clone repository
   2. Start android emulator
   3. Run expo start --android to launch app
   4. Exploratory testing and list end-to-end test cases
   5. Run Maestro studio to identify elements and write test flows
   6. Run tests to make sure tests are passing
   7. Repeat for iOS
   8. Organize tests with page object model
      1. Separate the elements into .js files (Easier to read element names and easier to modify if there are updates)
      2. Separate all the functions in separate .yaml files in each respective directory based on screens
      3. Call the functions on tests
   9. Run tests again to make sure tests are passing
   10. Record videos of tests
   11. Commit and push changes to branch
   12. Create a PR for review

2. **Code Changes**
    - Add end-to-end test flow files
    - Add app elements files
    - Add function files in separate directories

3. **How I tested**
    - Run locally using 'maestro test .maestro/flows' or  or 'maestro test .maestro/flows -e --platform={platform}'

4. **Videos**
     - iOS
       - [iOS-run-login-success-recording.mov](../../../Desktop/iOS-run-login-success-recording.mov)
       - [iOS-run-login-unsuccessful-recording.mov](../../../Desktop/iOS-run-login-unsuccessful-recording.mov)
       - [iOS-run-open-disclaimer-recording.mov](../../../Desktop/iOS-run-open-disclaimer-recording.mov)
       - [iOS-run-toggle-dark-mode-recording.mov](../../../Desktop/iOS-run-toggle-dark-mode-recording.mov)
       - [iOS-run-play-word-game-recording.mov](../../../Desktop/iOS-run-play-word-game-recording.mov)
       - [iOS-run-all-flows-recording.mov](../../../Desktop/iOS-run-all-flows-recording.mov)
     - Android
       - [Android-run-login-success-recording.mov](../../../Desktop/Android-run-login-success-recording.mov)
       - [Android-run-login-unsuccessful-recording.mov](../../../Desktop/Android-run-login-unsuccessful-recording.mov)
       - [Android-run-open-disclaimer-recording.mov](../../../Desktop/Android-run-open-disclaimer-recording.mov)
       - [Android-run-play-word-game-recording.mov](../../../Desktop/Android-run-play-word-game-recording.mov)
       - [Android-run-toggle-dark-mode-recording.mov](../../../Desktop/Android-run-toggle-dark-mode-recording.mov)
       - [Android-run-all-flows-recording.mov](../../../Desktop/Android-run-all-flows-recording.mov)

5. **Improvements**
    - Add more end-to-end tests such play game and verify win status, lose status, additional negative login cases
    - Reduce more duplicate code if possible
    - Reduce run-time if possible
    - Improve setup