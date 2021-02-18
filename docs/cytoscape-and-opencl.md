# Cytoscape 和 OpenCL（利用 GPU 计算）

## 这是什么

Cytoscape 支持在 GPU，多核 CPU 和使用 OpenCL 的多核处理器上执行并行计算任务。Cytoscape 对 OpenCL 的支持主要用于为第三方 Cytoscape 应用提供统一的 OpenCL 访问，但某些核心功能（prefues layout）也需要 OpenCL 支持来提高性能。

OpenCL 可以在几乎所有设备上运行，包括没有专用 GPU 的计算机。尽管你可能需要为设备安装其他驱动程序，但你应该能够在可以运行 Cytoscape 的任何平台上使用 OpenCL 功能。

## 设置和配置

CyCL 核心应用程序（已经成为 Cytoscape 发行版的一部分）使你可以查看可用的 OpenCL 设备，并配置首选设备以进行 OpenCL 计算。通过 `Edit -> Preferences -> OpenCL Settings...` 查看设备列表并配置你的首选设备。

![](images/cytoscape-and-opencl/opencl-settings.png)

在大多数情况下，如果有应该首选 GPU 设备。如果在配置窗口中没有你打算使用的设备或根本没有任何设备，则可能需要安装 OpenCL 驱动程序。对于主要制造商的 GPU，OpenCL 驱动程序通常与图形驱动程序一起安装。如果你已经安装了最新的图形驱动程序，但仍未在列表中看到你的设备，请检查你的 GPU 制造商的网站。要在 CPU 或 Xeon Phi 上使用 OpenCL，你需要从 CPU 制造商的网页上单独下载安装驱动程序。

**警告**，安装 OpenCL 设备驱动程序后，需要重新启动 Cytoscape 才能查看到该设备。

## OpenCL/GPU 故障排除

如果任何 OpenCL 应用程序都无法正常工作，可能有如下常见原因：

### CyCL 核心应用未安装或未正常初始化

诊断：检查是否可以看到 `Edit -> Preferences -> OpenCL Settings...` 菜单，如果没有则可能存在问题。

处理：检查 `CytoscapeConfiguration` 目录，如果其中包含名为 `disable-opencl.dummy` 的文件，请将其删除，然后从系统控制台启动 Cytoscape（使用 `cytoscape.bat` 或 `cytoscape.sh`）。检查控制台输出以获取更多信息。

### 没有可用的 OpenCL 设备

诊断和处理：请参见上文中的[设置和配置](#设置和配置)。

### Cytoscape 控制台显示 `Could not find OpenCL.dll`

处理：确保 Java 系统属性 `java.library.path` 的值中列出了包含 OpenCL.dll 的目录（通常可以在 `%windir\SysWOW64%` 或 `%windir%\system32` 中找到）。你可以通过在 `Cytoscape.vmoptions` 文件中添加 `-Djava.library.path=path1;path2` 的形式类修改 `java.library.path`。你可以在 Cytoscape 安装目录中找到 `Cytoscape.vmoptions`。

### 计算机暂时没有响应

处理：如果你在处理主显示的 GPU 上运行计算并且计算占用 GPU 时间过长则会导致出现该问题，从而导致操作系统无法更新显示。如果操作系统检测到此错误，它将终止 GPU 计算。你可以尝试运行较小的计算，也可以配置 `Timeout Detection and Recovery`（TDR） 在系统无响应下也能完成计算。你可以在 [Nvidia 论坛](https://forums.developer.nvidia.com/t/display-driver-stopped-responding-and-has-recovered-wddm-timeout-detection-and-recovery/15056) 和 [Microsoft 页面](https://docs.microsoft.com/zh-cn/windows-hardware/drivers/display/timeout-detection-and-recovery) 上获取更多信息。Microsoft 还提供了[测试和调试 TDR](https://docs.microsoft.com/zh-cn/windows-hardware/drivers/display/tdr-registry-keys) 的页面。

### 我的问题不在列表中

尝试为你的 CPU 安装驱动程序。CPU 平台性能较低，但通常更可靠。如果这样做没有帮助，请在 StackOverflow 的 [Cytoscape 标签帖子](https://stackoverflow.com/questions/tagged/cytoscape?sort=newest)中寻求帮助。
