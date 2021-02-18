# 命令行参数

Cytoscape 可以识别很多可选的命令行参数，包括网络文件、节点和边数据文件以及会话文件。使用 `-h` 或 `--help` 参数执行 Cytoscape 时可以生成如下输出：

```
usage: cytoscape.{sh|bat} [OPTIONS]
 -h,--help             Print this message.
 -v,--version          Print the version number.
 -s,--session <file>   Load a cytoscape session (.cys) file.
 -N,--network <file>   Load a network file (any format).
 -P,--props <file>     Load cytoscape properties file (Java properties
                       format) or individual property: -P name=value.
 -V,--vizmap <file>    Load vizmap properties file (Cytoscape VizMap
                       format).
 -S,--script <file>    Execute commands from script file.
 -R,--rest <port>      Start a rest service.
```

为选项指定的任何文件都可以为一个路径或 URL。例如你可以指定一个文件为网络（假设 `myNet.sif` 存在于当前工作目录中）：`cytoscape.sh -N myNet.sif`。

**注意**，当文件路径中包含空格，请确保在其周围加上引号：`cytoscape.bat -N "C:\Program Files\Cytoscape\sampleData\galFiltered.sif"`。

或者可以指定一个 URL 为网络：`cytoscape.sh -N http://example.com/myNet.sif`。

| 参数                  | 描述                                                         |
| :-------------------- | :----------------------------------------------------------- |
| `-h,--help`           | 生成上面看到的帮助输出并退出。                               |
| `-v,--version`        | 打印 Cytoscape 的版本号并退出。                              |
| `-s,--session <file>` | 指定要加载的会话文件。由于一次仅能够加载一个会话文件，因此该选项只能在命定行中指定一次。该选项需要一个 `.cys` Cytoscape 会话文件。尽管不是必需的，但会话文件通常以 `.cys` 扩展名结尾。 |
| `-N,--network <file>` | 用于加载所有类型的网络文件。使用 `-N` 选项可以加载 SIF，GML 和 XGMML 文件。可以在单个命令行中指定任意多个网络。 |
| `-P,--props <file>`   | 指定 Cytoscape 属性。可以将属性指定为属性文件（采用 Java 的标准属性格式），也可以指定为单个属性。在指定单个属性时，必须指定属性名称，后跟属性值，属性名和属性值之间用 `=` 连接。例如指定 `defaultSpeciesName`： `cytoscape.sh -P defaultSpeciesName=Human`。如果属性中包含空格，需要将属性名和属性值括在引号中： `cytoscape.sh -P "defaultSpeciesName=Homo Sapiens"`。例如包含 `noCanonicalization`，`species` 和 `bioDataServer` 的启动命令为：`cytoscape.sh -P defaultSpeciesName=Human -P noCanonicalization=true -P bioDataServer=myServer`。 |
| `-V,--vizmap <file>`  | 指定样式文件。                                               |
| `-S,--script <file>`  | 从指定的 Cytoscape 脚本文件执行命令。                        |
| `-R,--rest <port>`    | 在指定端口上启动 Cytoscape REST 服务。                       |

Cytoscape 运行后，可以从菜单中访问上述所有选项（除了启动 REST 服务）。
