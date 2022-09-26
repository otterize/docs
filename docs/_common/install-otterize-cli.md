<Tabs groupId="operating-systems">



<TabItem value="mac" label="Mac">
<Tabs>
<TabItem value="Apple Silicon" label="Apple Silicon">

```bash
wget https://github.com/otterize/otterize-cli/releases/download/v0.1.4/otterize-cli_0.1.4_macOS_arm64.tar.gz
tar xf otterize-cli_0.1.4_macOS_arm64.tar.gz
sudo cp otterize /usr/local/bin  # optionally move to PATH
```
</TabItem>
<TabItem value="Intel 64-bit" label="Intel 64-bit">

```bash
wget https://github.com/otterize/otterize-cli/releases/download/v0.1.4/otterize-cli_0.1.4_macOS_x86_64.tar.gz
tar xf otterize-cli_0.1.4_macOS_x86_64.tar.gz
sudo cp otterize /usr/local/bin  # optionally move to PATH
```
</TabItem>
</Tabs>
</TabItem>

<TabItem value="windows" label="Windows">
<Tabs>
<TabItem value="64-bit" label="64-bit">

```PowerShell
Invoke-WebRequest -Uri https://github.com/otterize/otterize-cli/releases/download/v0.1.4/otterize-cli_0.1.4_Windows_x86_64.zip -OutFile otterize-cli_0.1.4_Windows_x86_64.zip
Expand-Archive otterize-cli_0.1.4_Windows_x86_64.zip-DestinationPath .
# optionally move to PATH
```
</TabItem>
<TabItem value="32-bit" label="32-bit">

```PowerShell
Invoke-WebRequest -Uri https://github.com/otterize/otterize-cli/releases/download/v0.1.4/otterize-cli_0.1.4_Windows_i386.zip -OutFile otterize-cli_0.1.4_Windows_i386.zip
Expand-Archive otterize-cli_0.1.4_Windows_i386.zip-DestinationPath .
# optionally move to PATH
```
</TabItem>
<TabItem value="scoop" label="scoop">

```PowerShell
scoop bucket add otterize-cli https://github.com/otterize/scoop-otterize-cli
scoop update
scoop install otterize-cli
```
</TabItem>
</Tabs>
</TabItem>
<TabItem value="linux" label="Linux">
<Tabs>
<TabItem value="amd64" label="amd64">

```bash
wget https://github.com/otterize/otterize-cli/releases/download/v0.1.4/otterize-cli_0.1.4_Linux_x86_64.tar.gz
tar xf otterize-cli_0.1.4_Linux_x86_64.tar.gz
sudo cp otterize /usr/local/bin  # optionally move to PATH
```
</TabItem>
<TabItem value="i386" label="i386">

```bash
wget https://github.com/otterize/otterize-cli/releases/download/v0.1.4/otterize-cli_0.1.4_Linux_i386.tar.gz
tar xf otterize-cli_0.1.4_Linux_i386.tar.gz
sudo cp otterize /usr/local/bin  # optionally move to PATH
```
</TabItem>
</Tabs>
</TabItem>

</Tabs>

More variants are available at the [GitHub Releases page](https://github.com/otterize/otterize-cli/releases).
