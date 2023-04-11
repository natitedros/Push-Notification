import 'package:flutter/material.dart';
import 'package:onesignal_flutter/onesignal_flutter.dart';

class DisplayPage extends StatefulWidget {
  const DisplayPage({Key? key}) : super(key: key);

  @override
  State<DisplayPage> createState() => _DisplayPageState();
}

class _DisplayPageState extends State<DisplayPage> {

  @override
  void initState(){
    super.initState();
    initPlatform();
  }

  Future<void> initPlatform() async {
    await OneSignal.shared.setAppId("064c08f3-056b-470e-9f9b-b6ca2b813619");
    await OneSignal.shared.getDeviceState().then((value) => {
      print(value!.userId)
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Push Notification"
        ),
      ),
      body: const Center(
        child: Text('Check your notification panel...'),
      ),
    );
  }
}
