<Tabs groupId="operating-systems">



<TabItem value="mac" label="Mac" default>
<Tabs>
<TabItem value="Brew" label="Brew">

```bash
brew install otterize/otterize/otterize-cli
``` 
</TabItem>
<TabItem value="Apple Silicon" label="Apple Silicon">

```bash
curl -LJO https://get.otterize.com/otterize-cli/v1.0.6/otterize_macOS_arm64_notarized.zip
tar xf otterize_macOS_arm64_notarized.zip
sudo cp otterize /usr/local/bin  # optionally move to PATH
```
</TabItem>
<TabItem value="Intel 64-bit" label="Intel 64-bit">

```bash
curl -LJO https://get.otterize.com/otterize-cli/v1.0.6/otterize_macOS_x86_64_notarized.zip
tar xf otterize_macOS_x86_64_notarized.zip
sudo cp otterize /usr/local/bin  # optionally move to PATH
```
</TabItem>
</Tabs>
</TabItem>

<TabItem value="windows" label="Windows">
<Tabs>
<TabItem value="Scoop" label="Scoop" default>

```PowerShell
scoop bucket add otterize-cli https://github.com/otterize/scoop-otterize-cli
scoop update
scoop install otterize-cli
```
</TabItem>
<TabItem value="64-bit" label="64-bit">

```PowerShell
Invoke-WebRequest -Uri https://get.otterize.com/otterize-cli/v1.0.6/otterize_windows_x86_64.zip -OutFile otterize_Windows_x86_64.zip
Expand-Archive otterize_Windows_x86_64.zip -DestinationPath .
# optionally move to PATH
```
</TabItem>
</Tabs>
</TabItem>
<TabItem value="linux" label="Linux">
<Tabs>
<TabItem value="64-bit" label="64-bit">

```bash
wget https://get.otterize.com/otterize-cli/v1.0.6/otterize_linux_x86_64.tar.gz
tar xf otterize_linux_x86_64.tar.gz
sudo cp otterize /usr/local/bin  # optionally move to PATH
```
</TabItem>
</Tabs>
</TabItem>
</Tabs>

More variants are available at the [GitHub Releases page](https://github.com/otterize/otterize-cli/releases).
