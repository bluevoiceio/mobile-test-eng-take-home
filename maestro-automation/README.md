# Zuhair's ReadMe

## **Notes Describing My Process**

### **Video of Test Run** ###

test-videos

### **Why I Chose to Automate These Two Cases**
I used **Maestro** to perform the take-home assignment and wrote **two simple test cases**:
1. A **login/logout flow** test.
2. A **test validating that the user gets six attempts before the correct answer is revealed**.

### **Thought Process Behind These Tests:**

#### ✅ **Test 1 - Login/Logout Flow**
- This is essential for end-users to access the app.
- I wanted to **automate** this flow and include it in **regression testing**, as it **must** work.

#### ✅ **Test 2 - Max 6 Attempts**
- This test ensures all **underlying features** work correctly.
- It has the **most depth of coverage** and quickly verifies **core functionality**.
- Since this is an **essential feature**, automating it ensures the app behaves as expected.

---

## **Challenges**

### ❌ **Maestro Failed to Recognize the App by App ID**
- **Issue:**
    - Maestro is great for launching apps, but I **faced difficulties launching and closing** my app.
    - Normally, I would pass the **App ID** and use the `launchApp` command, but Maestro **failed to identify** the app.
    - This was likely because the demo app was running **inside Expo Go**.

- **Solution:**
    - Instead of using the App ID, I used **app name lookup** and **gestures** to launch and test the app.

---

## **What I Would Do If I Had More Time**

1. **Validate that entering "P" in the first box turns green**, indicating it’s in the correct position.
2. **Validate that entering "P" in the second box turns yellow**, indicating it’s in the word but in the wrong position.
3. **Test entering the correct word ("PLANT") all at once** to confirm the result is displayed correctly.
4. **Test entering all the correct letters in reverse order** to ensure the app prompts the user to retry until the order is correct.
5. **Test dark mode** to verify the correct color coding is displayed.

---

## **Prerequisite**
Before running the tests, **clone and set up** the `mobile-test-eng-take-home` repo.

📌 **Follow the setup instructions here:**  
[**mobile-test-eng-take-home README**](https://github.com/bluevoiceio/mobile-test-eng-take-home/blob/main/README.md)

---

# **Maestro Setup and Usage Guide**

## **Introduction**
[**Maestro**](https://maestro.mobile.dev/) is a mobile UI testing framework that enables you to write simple scripts for automating interactions on **iOS and Android apps**.

This guide will walk you through:  
✅ Setting up Maestro  
✅ Running test scripts  
✅ Troubleshooting common issues

---

## **Prerequisites**

### 1️⃣ Install Homebrew (If Not Installed)
Maestro requires **Homebrew** for installing dependencies on macOS.

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2️⃣ Install Java (If Not Installed)
```sh
brew install openjdk
```
Verify Java installation:
```sh
java -version
```

### 3️⃣ Install Android SDK (For Android Users)
```sh
brew install android-sdk
```
Ensure **ANDROID_HOME** is set:
```sh
echo 'export ANDROID_HOME=$HOME/Library/Android/sdk' >> ~/.zshrc
echo 'export PATH=$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$PATH' >> ~/.zshrc
source ~/.zshrc
```
Verify Android SDK installation:
```sh
adb --version
```

### 4️⃣ Install Maestro
```sh
brew install maestro
```
Verify installation:
```sh
maestro --version
```

---

## **Running Maestro Tests**

### 🚀 **1. Navigate to Your Test Directory**
```sh
cd maestro-automation/blue-voice-take-home
```

### 🚀 **2. Run a Test Script**
```sh
maestro test 01_LoginAndLogout.yaml
```

### 🚀 **3. Run Tests on a Specific Device**
List available devices:
```sh
maestro devices
```
Run test on a specific device:
```sh
maestro test --device "<DEVICE_ID>" ./test-script.yaml
```

### 🚀 **4. Start an Interactive Session**
To manually interact and debug UI elements:
```sh
maestro studio
```

---

## **Troubleshooting**

### ❌ **Maestro Not Found After Installation**
Try this:
```sh
export PATH="/opt/homebrew/bin:$PATH"
source ~/.zshrc
```

### ❌ **Android SDK Not Found**
Manually set the SDK path:
```sh
echo "sdk.dir=$HOME/Library/Android/sdk" > android/local.properties
```

### ❌ **Device Not Recognized**
Ensure **ADB is running**:
```sh
adb devices
```
If no devices are listed, **enable USB debugging** on your device.

---

Contact Me
If you have any questions or need further assistance, feel free to reach out!

📧 Email: zuhairreaz11@gmail.com

## **Conclusion**
You should now have **Maestro** set up for **mobile UI automation**. 🚀

For **advanced usage**, check out:  
📌 [**Maestro Documentation**](https://maestro.mobile.dev/)

Happy testing! 🧪✅