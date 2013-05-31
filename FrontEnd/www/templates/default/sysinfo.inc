<!-- $Id: sysinfo.inc,v 1.6 Exp $ -->

<!-- Main Content -->  
    
    <td class="main" valign="top"><br />


<table class="sysinfo" cellpadding="2" cellspacing="2">
  <tr>
    <td class="sysinfo">
      System:
    </td >
    <td class="sysinfo">
      %%system:name%%
    </td >
  </tr>
  <tr>
    
  </tr>
<<REPEAT fidoaddrs>>
  <tr>
    
  </tr>
<<END REPEAT fidoaddrs>>
  <tr>
        
  </tr>
  <tr>
    
    
  </tr>
  <tr>
    
  </tr>
  <tr>
    
  <tr>
    <td class="sysinfo">
      Total Logons:
    </td >
    <td class="sysinfo">
      %%JS:system.stats.total_logons%%
    </td >
  </tr>
  <tr>
    <td class="sysinfo">
      Logons Today:
    </td >
    <td class="sysinfo">
      %%JS:system.stats.logons_today%%
    </td >
  </tr>
  <tr>
    <td class="sysinfo">
      Total Time:
    </td >
    <td class="sysinfo">
      %%system.stats.total_timeon%%
    </td >
  </tr>
  <tr>
    <td class="sysinfo">
      Time Today:
    </td >
    <td class="sysinfo">
      %%JS:system.stats.timeon_today%%
    </td >
  </tr>
</table>
<div align="center">
<tr>
    
</tr>
</table>
</div>

<!-- end Main Content -->
