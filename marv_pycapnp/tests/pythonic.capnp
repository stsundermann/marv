@0xac17afb710499c42;

using import "/marv_pycapnp/types.capnp".Datetime;
using import "/marv_pycapnp/types.capnp".Timedelta;
using import "/marv_pycapnp/types.capnp".Map;

struct Pythonic {
  datetime @0 :Datetime;
  timedelta @1 :Timedelta;
  mapping @2 :Map(Text, Text);
}
